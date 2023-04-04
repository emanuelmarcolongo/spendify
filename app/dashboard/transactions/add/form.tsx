"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AddTransactionForm() {
  const [form, setForm] = useState({
    value: 0,
    type: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState<string | null>(null);

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const options = {
        method: "post",
        body: JSON.stringify(form),
      };
  
      const res = await fetch("/api/transactions", options);

      if (res.status === 200) {
        alert(await res.json())
      }
      else if (res.status !== 200) {
        setError(await res.json())
      }
    } catch (error: any) {
      setError(error?.message)
    }
    

   
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="value">Valor</Label>
        <Input
          required
          min={1}
          step={0.01}
          value={form.value}
          onChange={handleForm}
          name="value"
          type="number"
        ></Input>
      </div>

      <div className="grid w-full  items-center">
        <Label htmlFor="description">Descrição (opcional)</Label>
        <Input
          value={form.description}
          onChange={handleForm}
          name="description"
          type="text"
        ></Input>
      </div>

      <div className="grid w-full gap-2 items-center">
        <Label htmlFor="select">Tipo</Label>
        <Select
          required
          onValueChange={(value) => setForm({ ...form, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tipo de Transação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entrada">Entrada</SelectItem>
            <SelectItem value="saida">Saída</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {form.type === "saida" ? (
        <div className="grid w-full gap-2 items-center">
          <Label htmlFor="category">Categoria</Label>
          <Select
            required
            onValueChange={(value) => setForm({ ...form, category: value })}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alimentação">Alimentação</SelectItem>
              <SelectItem value="habitação">Habitação</SelectItem>
              <SelectItem value="transporte">Transporte</SelectItem>
              <SelectItem value="saude">Saúde</SelectItem>
              <SelectItem value="educação">Educação</SelectItem>
              <SelectItem value="entretenimento">Entretenimento</SelectItem>
              <SelectItem value="roupas">Roupas</SelectItem>
              <SelectItem value="compras">Compras</SelectItem>
              <SelectItem value="viagens">Viagens</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ) : (
        ""
      )}

      {form.type === "entrada" ? (
        <div className="grid w-full gap-2 items-center">
          <Label htmlFor="category">Categoria</Label>
          <Select
            required
            onValueChange={(value) => setForm({ ...form, category: value })}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="salario">Salário</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
              <SelectItem value="investimentos">Investimentos</SelectItem>
              <SelectItem value="vendas">Vendas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ) : (
        ""
      )}

      {error && <Alert>{error}</Alert>}

      <div className="w-full">
        <Button className="w-full ">Adicionar transação</Button>
      </div>
    </form>
  );
}
