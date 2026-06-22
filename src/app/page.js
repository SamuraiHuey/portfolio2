import Image from "next/image";
import Link from "next/link";
import Header from "./header.js"

export default function Home() {
  return (
    <main className="flex flex-col justify-evenly mb-15 h-[80vh]">
      <h1 className="title">
        <Link href="/portfolio">Portfolio</Link>
      </h1>

      <h1 className="title flex lg:justify-center  mr-50">
        <Link href="/about">About</Link>
      </h1>

      <h1 className="title flex lg:justify-end">
        <Link href="/experience">Experience</Link>
      </h1>
    </main>
  );
}
