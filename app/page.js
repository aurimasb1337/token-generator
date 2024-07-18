import Image from "next/image";
import TokenForm from "./components/TokenForm";

export default function Home() {
  return (
    <main className="flex bg-background  min-h-screen flex-col items-center justify-between p-4">
      <TokenForm />
    </main>
  );
}
