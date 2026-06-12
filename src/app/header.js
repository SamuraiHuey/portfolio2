import Image from "next/image";
import Logo from "../../public/png/SamuraiHueyLogo.svg"
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav class="border border-red-600 p-5">
                <ul class="flex justify-between items-center">
                    <li class="border border-blue-400">
                        <Link href="/">
                            Will Brent
                        </Link>
                    </li>
                    <li class="border border-green-400">
                        <Link href="/">
                            <Image
                                class="self-center"
                                src={Logo}
                                width={50}
                                height={50}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}