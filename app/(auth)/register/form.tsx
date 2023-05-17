"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setError("");

    if (data.password !== data.confirmPassword) {
      return setError("As senhas devem ser iguais");
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        signIn();
      } else {
        setError((await res.json()).error);
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
        <Label htmlFor="name">Nome completo</Label>
        <Input
          {...register("name", {
            required: true
          })}
          name="name"
          type="text"
        ></Input>
         {errors.name?.type === "required" && (
          <Alert>Insira um nome</Alert>
        )}
      </div>

      <div className="grid w-full  items-center">
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

      <div className="grid w-full items-center">
        <Label htmlFor="password">Senha</Label>
        <Input
          {...register("password", {
            required: true
          })}
          name="password"
          type="password"
        ></Input>
        {errors.password?.type === "required" && (
          <Alert>Insira sua senha</Alert>
        )}
      </div>

      <div className="grid w-full items-center">
        <Label htmlFor="confirmPassword">Confirmar senha</Label>
        <Input
          {...register("confirmPassword", {
            required: true
          })}
          name="confirmPassword"
          type="password"
        ></Input>
        {errors.confirmPassword?.type === "required" && (
          <Alert>Repita sua senha</Alert>
        )}
      </div>

      {error && <Alert>{error}</Alert>}

      <div className="w-full">
        <Button type='submit' className="w-full ">Criar conta!</Button>
      </div>
    </form>
  );
}
