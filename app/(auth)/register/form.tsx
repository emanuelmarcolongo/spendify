"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null)

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("")

    if (form.password !== form.confirmPassword) {
      return setError('As senhas devem ser iguais')
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        signIn()
      }
      else {
        setError((await res.json()).error)
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="name">Nome completo</Label>
        <Input required value={form.name} onChange={handleForm} name='name' type='text'></Input>
      </div>

      <div className="grid w-full  items-center">
        <Label htmlFor="email">E-mail</Label>
        <Input required value={form.email} onChange={handleForm} name='email' type='email'></Input>
      </div>

      <div className="grid w-full items-center">
        <Label htmlFor="password">Senha</Label>
        <Input required value={form.password}  onChange={handleForm} name='password' type='password'></Input>
      </div>

      <div className="grid w-full items-center">
        <Label htmlFor="password">Confirmar senha</Label>
        <Input required value={form.confirmPassword}  onChange={handleForm} name='confirmPassword' type='password'></Input>
      </div>

      {error && <Alert>{error}</Alert>}

      <div className="w-full">
      <Button className="w-full ">Criar conta!</Button>
      </div>
    </form>
  );
}
