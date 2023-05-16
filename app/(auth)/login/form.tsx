"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const callbackUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });
      console.log(res);
      if (!res?.error) {
        router.push("/dashboard");
      } else {
        setError("Email ou senha inválidos");
      }
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 w-full sm:w-[400px]"
    >
      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="email">E-mail</Label>
        <Input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Insira um formato de e-mail válido",
            },
          })}
          name="email"
          type="email"
        ></Input>
        {errors.email?.type === "required" && <Alert>Insira seu e-mail</Alert>}
        {errors.email?.message && <Alert>{errors.email?.message}</Alert>}
      </div>

      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="password">Senha</Label>
        <Input
          {...register("password", { required: true })}
          name="password"
          type="password"
        ></Input>
        {errors.password?.type === "required" && (
          <Alert>Insira sua senha</Alert>
        )}
      </div>

      {error && <Alert>{error}</Alert>}

      <div className="w-full">
        <Button type="submit" className="w-full ">
          Continuar
        </Button>
      </div>
    </form>
  );
}
