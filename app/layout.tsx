import './globals.css'
import { Providers } from './providers'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Spendify',
    template: ' Spendify | %s',
  },
  description: "Sua carteira centralizada, gerencie bem suas despesas e conquiste seus objetivos",
};



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
