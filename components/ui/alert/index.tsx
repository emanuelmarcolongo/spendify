import Image from "next/image"

 
 type AlertProps = {
    children: React.ReactNode
 }

 export function Alert({ children }: AlertProps) {
    return (
        <div className="rounded-xl p-2 border-slate-100 border mt-2 bg-red-400 flex items-center justify-center text-center">
            {children}
        </div>
    )
 }

 export function InputAlert({ children }: AlertProps) {
    return (
        <div className="rounded-xl py-2 text-red-700 text-sm font-semibold flex items-center">
            <Image className='mr-2' alt="alert" width={15} height={15} src={"/alert.svg"}/>
            {children}
        </div>
    )
 }

