import './globals.css'
import { Providers } from './providers'
import { Metadata } from 'next';
import { Poppins, Comfortaa} from 'next/font/google'

export const metadata: Metadata = {
  title: {
    default: 'Spendify',
    template: ' Spendify | %s',
  },
  description: "Sua carteira centralizada, gerencie bem suas despesas e conquiste seus objetivos",
};

const mainFont = Poppins ({
  weight: ["300", "400", '500', "600", "700"],
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
      <body className={`${mainFont.className} bg-slate-100`}>
        <Providers>
           {children}
        </Providers>
      </body>
    </html>
  )
}
