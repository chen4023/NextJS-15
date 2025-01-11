import Counter from "@/components/Counter";

export default function Home() {
  console.log('안녕! - 서버')
  return (
    <div>
      홈페이지다! 버전2
      <Counter />
    </div>
  );
}
