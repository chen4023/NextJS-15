import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "쇼핑몰 사이트 | 제품 페이지",
  description: "제품 상세페이지 입니다.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex gap-2 p-4 border border-pink-300 mt-1">
        <Link href='/products'>전체</Link>
        <Link href="/products/woman">여성용</Link>
        <Link href="/products/man">남성용</Link>
      </nav>
      <section className="p-4">{children}</section>
    </>
  );
}