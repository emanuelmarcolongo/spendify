import './globals.css'
import { Providers } from './providers'
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google'


export const metadata: Metadata = {
  title: {
    default: 'Spendify',
    template: ' Spendify | %s',
  },
  description: "Sua carteira centralizada, gerencie bem suas despesas e conquiste seus objetivos",
};

const mainFont = Montserrat ({
  subsets: ['latin'],
  variable: '--mainFont',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} bg-indigo-100`}>
        <Providers>        
           {children}
        </Providers>
      </body>
    </html>
  )
}
