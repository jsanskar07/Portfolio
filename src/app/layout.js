import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar1 from './Components/Navbar1'

const inter = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export const metadata = {
  title: 'Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-mont bg-light w-full min-h-screen`}>   
        <Navbar1 />     
        {children}
      </body>
    </html>
  )
}
