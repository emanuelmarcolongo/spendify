'use client'

import { useState } from "react";

export default function SignUpForm () {

    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        setSignUp({
          ...signUp,
          [e.currentTarget.name]: e.currentTarget.value,
        });
      }

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(signUp);
      }

    return (
    <div className="max-w-[50%] mx-auto my-auto">
    <form
      onSubmit={submitForm}
      className="bg-white drop-shadow-xl bg-opacity-50 shadow-md rounded-xl mt-4 gap-10 px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Your Name Here"
        required
        name="name"
        onChange={handleForm}
        value={signUp.name}
      />

    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="youremail@example.com"
        required
        name="email"
        onChange={handleForm}
        value={signUp.email}
      /> 

    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="password"
        required
        name="password"
        onChange={handleForm}
        value={signUp.password}
      />  

     <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="confirm password"
        required
        name="confirmPassword"
        onChange={handleForm}
        value={signUp.confirmPassword}
      />        

    

      <button
        className="inline-block align-baseline font-bold text-large bg-black rounded-xl h-[30px] text-white hover:text-indigo-300"
        type="submit"
      >
        Fazer Cadastro
      </button>
    </form>
        </div>
    )

}