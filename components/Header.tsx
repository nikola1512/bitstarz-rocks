import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 shrink-0 bg-blue-500 text-white p-4 sticky top-0">
      <Link href={"/"}>Bitstarz Rocks!</Link>
    </header>
  );
}
