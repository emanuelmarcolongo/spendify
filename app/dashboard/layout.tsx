import DashboardNavbar from "./components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <DashboardNavbar/>
           {children}
      </body>
    </html>
  )
}
