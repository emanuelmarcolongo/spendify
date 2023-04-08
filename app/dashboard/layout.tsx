
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100 flex flex-col'>

           {children}

      </body>
    </html>
  )
}
