import Image from "next/image";
import Link from "next/link";
import Header from "./header.js"

export default function Home() {
  return (
    <main class="flex flex-col justify-evenly mb-15 h-[80vh]">
      <h1 class="title">
        <Link href="/portfolio">Portfolio</Link>
      </h1>

      <h1 class="title flex justify-center  mr-50">
        <Link href="/about">About</Link>
      </h1>

      <h1 class="title flex justify-end">
        <Link href="/experience">Experience</Link>
      </h1>
    </main>
  );
}
