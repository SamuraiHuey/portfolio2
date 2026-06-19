import Image from "next/image.js";
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"
import Experience_1 from "../../../public/jpeg/experience-a.jpeg"
import Experience_2  from "../../../public/jpeg/experience-b.jpeg"
import Experience_3  from "../../../public/jpeg/experience-c.jpeg"

export default function Home() {
  return (
    <main className="">
      <h1 className="title">Experience</h1>
      <p className="p-5">My background is mostly full-stack web development, with a fair amount of digital strategy, marketing, and project management mixed in. I’ve built production websites from scratch, managed hosting infrastructure, handled third-party integrations, and run SEO programs. I’ve also had to manage stakeholders, write specs, and keep projects on track when requirements shifted. I work well in both directions — talking through technical decisions with other developers and explaining them clearly to people who aren’t.</p>

      <section className="flex grid-cols-3 justify-center items-top">
        <div className="p-5 w-33/100">
          <Image
            className=""
            src={Experience_1}
          />
          <h2 className="mt-5">Engineering</h2>
          <p>Most of my development work has been full-stack, and the stack has varied by project. On the CMS side I've worked heavily in WordPress and PHP, with some professional exposure to Drupal. On the front end, I've been working in Next.js, TailwindCSS, and JavaScript for about 5 years. I've also done a fair amount of REST API integration work across projects, connecting to ATS platforms, ad networks, and other third-party services. On the back end, I've worked with SQL and MongoDB in both professional and educational projects, and I've been putting time into Python outside of work. I'm comfortable with server configuration and hosting infrastructure — cPanel, WHM, Interworx, VPS — and I use Git consistently and deploy to production regularly. I've also spent a lot of time as the only technical person in the room, which means I've had to get good at gathering requirements, pushing back when something won't work, and delivering in a way that non-technical stakeholders can actually evaluate. </p>
        </div>
        <div className="p-5 w-33/100">
          <Image
            className=""
            src={Experience_2}
          />
          <h2 className="mt-5">Marketing</h2>
          <p>A good chunk of my work has sat at the intersection of development and marketing. I’ve built SEO workflows, including AI-assisted content pipelines, that improved organic rankings for multiple sites. I’ve also set up and managed geofencing and geotargeting campaigns — handling the technical side of the integrations, configuring targeting, and tracking results through analytics. I’m not a marketer at heart, but I know enough to build the infrastructure for a marketing program and keep it running without needing a separate team to handle the technical pieces.</p>
        </div>
        <div className="p-5 w-33/100">
          <Image
            className=""
            src={Experience_3}
          />
          <h2 className="mt-5">Project Management</h2>
          <p>Several of the larger projects I’ve worked on required me to own more than just the development. The WorkRocket rebrand is a great example. I was coordinating across design, leadership, and multiple brands simultaneously, while also doing the actual build. Same with the PeopleSolutions overhaul, where I came in and rebuilt the company’s online presence from the ground up. In both cases I was scoping the work, managing the timeline, and the one accountable when something needed to ship. I’m used to that kind of ownership and I work better when I have it.</p>
        </div>

      </section>

      <h2 className="underline ml-5">Resume</h2>

      <section className="mx-5 grid grid-cols-2 gap-10">


        <div id="Employer" className="my-5">
          <h3>WorkRocket - Full-Stack Developer and Director of Digital Strategy</h3>
          <h4>March 2024 - June 2026</h4>
          <hr id="Break" className="h-1 border-t-2 size-1/2 my-2"/>
          <ul className="list-disc ml-5">
            <li>Build and ship full-stack web applications for external recruiting clients using JavaScript, React, Node.js, PHP, and WordPress, working across both frontend and backend layers to deliver complete, functional solutions.</li>
            <li>Delivered 7 custom career sites for external clients, translating business requirements into clean, maintainable codebases and communicating progress and tradeoffs throughout delivery.</li>
            <li>Build and maintain a job board ecosystem serving 100+ client brands per month, integrating SQL databases, REST APIs, and frontend frameworks to keep a high-volume, data-driven application running reliably.</li>
            <li>Incorporated AI-assisted development tools into the daily workflow, reducing project timelines from roughly 10 weeks to 6, a 40% improvement, while maintaining code quality and client satisfaction across all deliverables.</li>
          </ul>
          <section className="flex mt-5">
            <strong className="mr-2">Skills used:</strong>
            <ul className="flex grid grid-cols-5 gap-3 italic">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li className="col-span-2">Server Administration</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li className="col-span-2">AI-assisted Development</li>
            </ul>
          </section>
        </div>

        <div id="Employer" className="my-5">
          <h3>The Richmond Group USA - Director of Digital Marketing</h3>
          <h4>January 2025 - June 2026</h4>
          <hr id="Break" className="h-1 border-t-2 size-1/2 my-2"/>
          <ul className="list-disc ml-5">
            <li>Oversee technology strategy across 6 brands, developing an understanding of how technical decisions create business value and communicating that connection clearly to non-technical stakeholders.</li>
            <li>Act as a technical consultant to clients and stakeholders, explaining complex systems clearly, answering questions, and translating goals into workable solutions using AI tools including Claude and ChatGPT to accelerate delivery.</li>
            <li>Manage an internal hiring portal product through its full lifecycle using Agile workflows, coordinating across technical and non-technical stakeholders and keeping delivery on track across multiple concurrent workstreams.</li>
            <li>Manage hosting infrastructure, vendor relationships, and security processes including DNS, SSL, and email threat response across all brands.</li>
            <li>Designed and deployed an internal AI-powered email vetting tool, managing the full build and rollout independently and training staff on its use; the tool is in active daily use across the organization.</li>
            <li>Provide executive leadership for a new techonology-focused brand under the company umbrella.</li>
          </ul>
          <section className="flex mt-5">
            <strong className="mr-2">Skills used:</strong>
            <ul className="flex grid grid-cols-5 gap-3 italic">
              <li>Agile Methodology</li>
              <li>Stakeholder Communication</li>
              <li>Leadership</li>
              <li>AI Tools (Claude)</li>
              <li>Email Marketing</li>
              <li>DNS</li>
              <li className="col-span-2">Server Administration</li>
            </ul>
          </section>
        </div>

        <div id="Employer" className="my-5">
          <h3>2U - Teaching Assistant</h3>
          <h4>March 2024 - June 2026</h4>
          <hr id="Break" className="h-1 border-t-2 size-1/2 my-2"/>
          <ul className="list-disc ml-5">
            <li>Worked within a structured full-stack curriculum across 5 cohorts covering HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, and MongoDB, absorbing feedback from senior instructors and applying it immediately to improve delivery.</li>
            <li>Delivered technical instruction to learners at varying skill levels, developing the habit of thinking out loud, breaking problems into parts, and explaining reasoning clearly — skills that translate directly into collaborative engineering environments.</li>
            <li>Led independent sessions and office hours focused on debugging and code comprehension, building comfort with diagnosing problems methodically before jumping to solutions.</li>
          </ul>
          <section className="flex  mt-5">
            <strong className="mr-2">Skills used:</strong>
            <ul className="flex grid grid-cols-5 gap-3 italic">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
              <li>Mentorship</li>
              <li className="col-span-2">Andragogy Principles</li>
            </ul>
          </section>
        </div>

        <div id="Employer" className="my-5">
          <h3>NIC Inc (Now Tyler Technologies) - Jr. Software Developer</h3>
          <h4>March 2022 - December 2022</h4>
          <hr id="Break" className="h-1 border-t-2 size-1/2 my-2"/>
          <ul className="list-disc ml-5">
            <li>Worked within a structured enterprise development team supporting a state government client, translating stakeholder requirements into technical tasks and communicating progress across both sides of the engagement.</li>
            <li>Diagnosed and optimized codebases across Drupal, WordPress, .NET, and PHP environments, resolving bugs and improving stability for state-level web applications.</li>
            <li>Contributed to maintenance and issue resolution with a focus on Drupal and PHP platforms, using Git for source control.</li>
          </ul>
          <section className="flex mt-5">
            <strong className="mr-2">Skills used:</strong>
            <ul className="flex grid grid-cols-5 gap-3 italic">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li className="col-span-2">Server Administration</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li className="col-span-2">AI-assisted Development</li>
            </ul>
          </section>
        </div>

      </section>

      <section>
        <div id="Skills" className="justify-items-center my-5">
          <h2>Skills Overview</h2>
          <div id="Break" className="border size-1/2 mt-2 mb-2"></div>
          <section className="flex my-3">
            <div className="mr-5"><strong>Language & Frameworks:</strong></div>
            <ul className="flex gap-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Server Administration</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </section>

          <section className="flex my-3">
            <div className="mr-5"><strong>Platforms & Tools:</strong></div>
            <ul className="flex gap-5">
              <li>WordPress</li>
              <li>Drupal</li>
              <li>WHM</li>
              <li>cPanel</li>
              <li>Git</li>
              <li>SEMRush</li>
              <li>Google Analytics</li>
              <li>Interworx</li>
            </ul>
          </section>

          <section className="flex my-3">
            <div className="mr-5"><strong>Professional:</strong></div>
            <ul className="flex gap-5">
              <li>Agile Methodology</li>
              <li>Client Communication</li>
              <li>Scrum</li>
              <li>AI-Assisted Development</li>
              <li>Technical Documentation</li>
              <li>Server Administration</li>
              <li>IT Infrastructure</li>
              <li>Email Server Maintenance</li>
            </ul>
          </section>

          <section className="flex my-3">
            <div className="mr-5"><strong>AI Tools:</strong></div>
            <ul className="flex gap-5">
              <li>Claude</li>
              <li>ChatGPT</li>
              <li>Perplexity</li>
              <li>Lovable</li>
              <li>Gemini</li>
            </ul>
          </section>

        </div>
      </section>
    </main>

  );
}