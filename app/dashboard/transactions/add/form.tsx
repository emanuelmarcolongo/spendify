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
import { useRouter } from "next/navigation";
import {
  expensesCategories,
  incomeCategories,
} from "@/app/constants/transaction-category";

export default function AddTransactionForm() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    value: 0,
    type: "",
    category: "",
    description: "",
  });

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<string | null>(null);

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSucess(null);

    setDisabled(true);
    try {
      const options = {
        method: "post",
        body: JSON.stringify(form),
      };

      const res = await fetch("/api/transactions", options);

      if (res.status === 200) {
        setDisabled(false);
        setSucess("Transação adicionada com sucesso!");
        setForm({
          value: 0,
          type: "",
          category: "",
          description: "",
        });
        router.refresh();
      } else if (res.status !== 200) {
        setDisabled(false);
        setError(await res.json());
      }
    } catch (error: any) {
      setDisabled(false);
      setError("Algo deu errado, tente novamente");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 font-bold w-full text-white">
      <div className="grid w-full gap-2  items-center">
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
          name="select"
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

      {form.type === "saida" && (
        <div className="grid w-full gap-2 items-center">
          <Label htmlFor="expenses">Categoria</Label>
          <Select
            name="expenses"
            required
            onValueChange={(value) => setForm({ ...form, category: value })}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {expensesCategories?.map((category, idx) => (
                <SelectItem key={idx} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {form.type === "entrada" && (
        <div className="grid w-full gap-2 items-center">
          <Label htmlFor="income">Categoria</Label>
          <Select
            name="income"
            required
            onValueChange={(value) => setForm({ ...form, category: value })}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {incomeCategories?.map((category, idx) => (
                <SelectItem key={idx} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="w-full">
        <Button disabled={disabled} className="w-full ">
          Adicionar transação
        </Button>
      </div>

      {sucess && <p className="text-positiveBalance">{sucess}</p>}
      {error && <p className="text-negativeBalance">{error}</p>}
    </form>
  );
}
