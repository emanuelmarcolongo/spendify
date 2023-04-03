import SignUpForm from "./components/form"



export default function SignUpPage() {


    return (
        <div className="flex flex-col items-center">
            <h1 className="mx-auto my-auto max-w-[50%]">Faça seu cadastro</h1>
            <SignUpForm/>
        </div>
    )
}