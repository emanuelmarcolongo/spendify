"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      signIn("credentials", {
        email: form.email,
        password: form.password,
        callbackUrl: "/dashboard"
      });

    } catch (error: any) {
      setError(error?.message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="email">E-mail</Label>
        <Input
          required
          value={form.email}
          onChange={handleForm}
          name="email"
          type="email"
        ></Input>
      </div>

      <div className="grid w-full items-center">
        <Label htmlFor="password">Senha</Label>
        <Input
          required
          value={form.password}
          onChange={handleForm}
          name="password"
          type="password"
        ></Input>
      </div>

      {error && <Alert>{error}</Alert>}

      <div className="w-full">
        <Button className="w-full ">Continuar</Button>
      </div>
    </form>
  );
}
