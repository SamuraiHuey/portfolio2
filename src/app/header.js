import Image from "next/image";
import Logo from "../../public/png/SamuraiHueyLogo.svg"
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className=" p-5">
                <ul className="flex justify-between items-center">
                    <li className="">
                        <Link href="/">
                            Will Brent
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/">
                            <Image
                                className="self-center"
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