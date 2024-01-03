import { list, phone } from "@/public/assets";

export const navLinks = [
  {
    id: "home",
    name: "Início",
    ref: "/",
  },
  {
    id: "register",
    name: "Cadastro",
    ref: "/register",
  },
  {
    id: "login",
    name: "Login",
    ref: "/login",
  },
];

export const dashboardNavLinks = [
  {
    id: "dashboard",
    name: "Dashboard",
    ref: "/dashboard",
  },
  {
    id: "transactions",
    name: "Transações",
    ref: "/dashboard/transactions",
  },
  {
    id: "add",
    name: "Adicionar",
    ref: "/dashboard/transactions/add",
  },
];

export const features = [
  {
    id: 0,
    title: "Organização em primeiro lugar",
    imgAlt: "Lista",
    imgSrc: list,
    description: "Transações categorizadas e exibidas em listas com filtros de tempo e gráficos sobre os seus gastos."
  },
  {
    id: 1,
    title: "Utilize onde quiser",
    imgAlt: "Dispositivo móvel",
    imgSrc: phone,
    description: "A página tem design responsivo para você utilizar do seu celular ou do seu computador para manter sempre atualizada a sua vida financeira "
  }
]
