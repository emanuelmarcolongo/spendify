import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Spendify',
  description: 'a next aplication',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
           {children}
        </Providers>
      </body>
    </html>
  )
}
