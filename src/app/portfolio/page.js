import Image from "next/image.js";
import Link from "next/link";
import Logo from "../../../public/png/SamuraiHueyLogo.svg"
import OnlyCNCJobs from "../../../public/png/OnlyCNCJobs-Logo-1.png"
import Young from "../../../public/png/Young-Innovations-Logo-Refresh-RGB.png"
import WorkRocket from "../../../public/png/WR-Logo-RGB_Horizontal-Full-Color.png"

export default function Home() {
  return (
    <main>
      <h1 className="title ">Portfolio</h1>
      <p className="pl-4">From Full-Stack Development to SEO and Marketing.</p>
      <div id="Break" className="border size-1/2 justify-self-center m-5"></div>
      <ul>

        <li class="flex items-center mt-5">
          <Image
            className=""
            src={WorkRocket}
            sizes="40vw"
          />
          <section className="p-5">
            <h2 className=""><Link href="https://workrocket.com/">WorkRocket Homepage</Link></h2>
            <p className="mt-5">Built the homepage for RPO company WorkRocket from the ground up, managing both the development and a full company rebranding from start to finish.</p>
            <ul className="flex flex-wrap gap-1 mt-5">
              <h3 className="font-bold">Technology:</h3>
              <li>WordPress</li>
              <li>|</li>
              <li>Elementor</li>
              <li>|</li>
              <li>PHP</li>
              <li>|</li>
              <li>RankMathSEO</li>
              <li>|</li>
              <li>CPanel</li>
              <li>|</li>
              <li>WHM</li>
              <li>|</li>
              <li>Softaculous</li>
              <li>|</li>
              <li>Elementor</li>
            </ul>
          </section>
        </li>

        <div id="Break" className="border size-1/2 justify-self-center my-5"></div>

        <li class="flex items-center mt-5">
          <section className="p-5">
            <h2 className="mt-5"><Link href="https://younginnovationscareers.com/">Young Innovations Careers</Link></h2>
            <p className="mt-5">Built a custom careers site for dental supply giant Young Innovations, including a REST API integration with their existing Workday ATS. Developed dedicated landing pages for each of their brands to create individual recruiting funnels and strengthen their SEO presence across the portfolio.</p>
            <ul className="flex flex-wrap gap-1 mt-5">
              <h3 className="font-bold">Technology:</h3>
              <li>WordPress</li>
              <li>|</li>
              <li>Elementor</li>
              <li>|</li>
              <li>PHP</li>
              <li>|</li>
              <li>REST API</li>
              <li>|</li>
              <li>WP Job Manager</li>
              <li>|</li>
              <li>RankMathSEO</li>
              <li>|</li>
              <li>CPanel</li>
              <li>|</li>
              <li>WHM</li>
              <li>|</li>
              <li>Softaculous</li>
              <li>|</li>
              <li>SEMRush</li>
              <li>|</li>
              <li>Claude Code</li>
            </ul>
          </section>
          <Image
            className=""
            src={Young}
            sizes="40vw"
          />
        </li>

        <div id="Break" className="border size-1/2 justify-self-center my-2"></div>

        <li class="flex items-center mt-5">
          <Image
            className=""
            src={OnlyCNCJobs}
            sizes="40vw"
          />
          <section className="p-5">
            <h2 className="mt-5"><Link href="https://onlycncjobs.com/">OnlyCNCJobs</Link></h2>
            <p className="mt-5">As Managing Director, led the launch and full operations of a CNC-focused job board. Designed and built the site from scratch, then oversaw all growth and business development through year one.</p>
            <ul className="flex flex-wrap gap-1 mt-5">
              <h3 className="font-bold">Technology:</h3>
              <li>WordPress</li>
              <li>|</li>
              <li>Elementor</li>
              <li>|</li>
              <li>PHP</li>
              <li>|</li>
              <li>REST API</li>
              <li>|</li>
              <li>WP Job Manager</li>
              <li>|</li>
              <li>RankMathSEO</li>
              <li>|</li>
              <li>CPanel</li>
              <li>|</li>
              <li>WHM</li>
              <li>|</li>
              <li>Softaculous</li>
              <li>|</li>
              <li>SEMRush</li>
              <li>|</li>
              <li>Claude Code</li>
            </ul>
          </section>
        </li>

        <div id="Break" className="border size-1/2 justify-self-center my-5"></div>

        <li class="flex items-center mt-5">
          <section className="p-5">
            <h2 className="mt-5"><Link href="https://willbrent.com/">Willbrent.com</Link></h2>
            <p className="mt-5">This site, designed and built to showcase my background in a clean, minimal way. The focus is on the work itself rather than visual noise.</p>
            <ul className="flex flex-wrap gap-1 mt-5">
              <h3 className="font-bold">Technology:</h3>
              <li>Next.js</li>
              <li>|</li>
              <li>Tailwind CSS</li>
              <li>|</li>
              <li>JavaScript</li>
              <li>|</li>
              <li>Git</li>
              <li>|</li>
              <li>Github</li>
            </ul>
            <h4 className="italic">*All code written by hand, no AI code generation tools were used in the development of this site.</h4>
          </section>
          <Image
            className=""
            src={Logo}
            width={500}
          />
        </li>
      </ul>
    </main>

  );
}