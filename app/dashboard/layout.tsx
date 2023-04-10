import DashboardNavbar from "./components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='indigo-100 flex flex-col'>
          <DashboardNavbar/>
           {children}

      </body>
    </html>
  )
}
