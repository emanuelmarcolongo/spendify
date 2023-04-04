 
 type AlertProps = {
    children: React.ReactNode
 }

 export function Alert({ children }: AlertProps) {
    return (
        <div className="rounded-xl p-2 border-slate-100 border bg-red-400 flex items-center justify-center text-center">
            {children}
        </div>
    )
 }