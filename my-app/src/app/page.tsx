import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/blog">Blog</Link>
    </main>
  );
}