"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        console.log('deu bom')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-[400px]">
      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="name">Nome completo</Label>
        <Input value={form.name} onChange={handleForm} name='name' type='text'></Input>
      </div>

      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="email">E-mail</Label>
        <Input value={form.email} onChange={handleForm} name='email' type='email'></Input>
      </div>

      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="password">Senha</Label>
        <Input value={form.password}  onChange={handleForm} name='password' type='password'></Input>
      </div>

      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="password">Senha</Label>
        <Input value={form.confirmPassword}  onChange={handleForm} name='confirmPassword' type='password'></Input>
      </div>

      <div className="w-full">
      <Button className="w-full ">Criar conta!</Button>
      </div>
    </form>
  );
}
