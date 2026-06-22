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
      <p className="px-4">From Full-Stack Development to SEO and Marketing.</p>

      <hr id="Break" className="border size-1/2 justify-self-center m-5"></hr>

      <ul className="md:ml-25">

        <li className="flex flex-col md:flex-row items-center mt-5">
          <Link className="sm:w-1/2 md:w-1/3 md:shrink-0" href="https://workrocket.com/">
            <Image
              className=""
              src={WorkRocket}
              width="full"
              height="auto"
              alt="WorkRocket Logo"
            />
          </Link>
          <section className="md:w-1/2 p-5">
            <h2 className=""><Link href="https://workrocket.com/">WorkRocket Homepage</Link></h2>
            <p className="mt-5">Led full-stack development of the WorkRocket homepage alongside leading a company-wide rebrand. Owned the project end to end: architecture decisions, build, deployment, and cross-functional coordination with stakeholders across the organization. WorkRocket operates as a recruitment process outsourcing firm, so the site had to function as both a marketing asset and a credibility signal to potential clients.</p>
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

        <hr id="Break" className="border size-1/2 justify-self-center my-5"></hr>

        <li className="flex flex-col md:flex-row items-center mt-5">
          <Link className="sm:w-1/2 md:w-1/3 md:shrink-0" href="https://younginnovationscareers.com/">
            <Image
              className=""
              src={Young}
              width="full"
              height="auto"
              alt="Young Innovations Logo"
            />
          </Link>
          <section className="md:w-1/2 p-5">
            <h2 className="mt-5"><Link href="https://younginnovationscareers.com/">Young Innovations Careers</Link></h2>
            <p className="mt-5">Designed and built a custom career portal for <Link className="underline" href="https://younginnovations.com/">Young Innovations</Link>, a dental supply company with multiple subsidiary brands. Integrated directly with their existing Workday ATS via REST API to keep job listings in sync without manual overhead. Developed individual landing pages for each brand to create isolated recruiting funnels and improve organic search visibility across the portfolio. This project required careful coordination between their internal HR team, their ATS vendor, and my own development work.</p>
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

        <hr id="Break" className="border size-1/2 justify-self-center my-2"></hr>

        <li className="flex flex-col md:flex-row items-center mt-5">
          <Link className="sm:w-1/2 md:w-1/3 md:shrink-0" href="https://onlycncjobs.com/">
            <Image
              className=""
              src={OnlyCNCJobs}
              width="full"
              height="auto"
              alt="Only CNC Jobs Logo"
            />
          </Link>
          <section className="md:w-1/2 p-5">
            <h2 className="mt-5"><Link href="https://onlycncjobs.com/">OnlyCNCJobs</Link></h2>
            <p className="mt-5">Built and launched a niche job board targeting the CNC machining industry, serving as both the technical lead and Managing Director. Handled everything from site architecture and development to SEO strategy, content operations, and employer outreach. Integrated an AI-powered support chatbot to handle inbound inquiries and reduce operational load. Oversaw all growth and business development through year one.</p>
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

        <hr id="Break" className="border size-1/2 justify-self-center my-5"></hr>

        <li className="flex flex-col md:flex-row items-center mt-5">
          <Image
            className="w-1/3"
            src={Logo}
            width="full"
            height="auto"
            alt="Will Brent's Logo"
          />
        
          <section className="p-5 md:w-1/2">
            <h2 className="mt-5"><Link href="https://willbrent.com/">Willbrent.com</Link></h2>
            <p className="mt-5">This site, built to let the work speak for itself. Intentionally minimal in design to keep the focus on content rather than visual decoration. Built entirely by hand with no AI code generation tools used at any point in development.</p>
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
          </section>
          </li>

      </ul>

      <section>
        <h2 className="justify-self-center">Bootcamp Projects</h2>

        <hr id="Break" className="border size-1/2 justify-self-center my-5"></hr>

        <ul className="flex flex-col md:flex-row justify-self-center gap-5 p-5">
          <li className="md:w-3/10">
            <Link href="https://samuraihuey.github.io/passwordGenerator/"><h3 className="underline justify-self-center">passwordGenerator</h3></Link>
            <p>A simple, but effective password generator, made using JavaScript. Prompts user using dialog box to ensure the password meets any needed character specifications.</p>
            <ul className="flex grid grid-cols-3 gap-x-5">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          
          <li className="md:w-3/10">
            <Link href="https://samuraihuey.github.io/taskinator/"><h3 className="underline justify-self-center">Taskinator</h3></Link>
            <p>A Kanban board built using basic JavaScript, and utilizing Local Storage to keep persistant data after page refresh.</p>
            <ul className="flex grid grid-cols-3 gap-x-5">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>

          <li className="md:w-3/10">
            <Link href="https://cshepscorp.github.io/lorem-sipsum/"><h3 className="underline justify-self-center">Lorem Sipsum</h3></Link>
            <p>Built as a collaborative project for a project in bootcamp. The assignment was to create a site from scratch using 2 new technologies not taught in class, with programmaticly rendered pages. For my group, we went above and beyond and implemented 4 technologies. Those are Materialize CSS and 3 third-party API's.</p>
            <ul className="flex grid grid-cols-3 gap-x-5">
              <li>JavaScript</li>
              <li>Materialize CSS</li>
              <li>Ticketmaster API</li>
              <li>Documenu API</li>
              <li>OpenBreweriesDB API</li>
            </ul>
          </li>
        </ul>

      </section>

    </main>

  );
}