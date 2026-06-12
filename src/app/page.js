import Image from "next/image";
import Link from "next/link";
import Header from "./header.js"

export default function Home() {
  return (
    <main class="mb-15">
      <h1 class="title">
        <Link href="/portfolio">Portfolio</Link>
      </h1>

      <h1 class="title ml-125">
        <Link href="/about">About</Link>
      </h1>

      <h1 class="title justify-self-end">
        <Link href="/experience">Experience</Link>
      </h1>
    </main>
  );
}
