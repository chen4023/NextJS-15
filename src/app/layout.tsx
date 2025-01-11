import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })


const signika = Signika({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signika-mono',
})
export const metadata: Metadata = {
  title: "쇼팡몰 사이트",
  description: "제품을 판매하는 곳입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${signika.variable}`} >
      <body className="font-singika">
        <header className="flex justify-between items-center p-2 border">
          <Link href='/'>Demo Note App</Link>
          <nav className="flex gap-3">
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
