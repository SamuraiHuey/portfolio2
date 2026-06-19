import Image from "next/image.js";
import Header from "../header.js"
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main className="">
      <h1 className="title">Experience</h1>
      <p className="p-5">I am a highly adaptable person who has worn a lot of different hats in my life. I have worked in every field from Food Service, Management, Sales, and have settled into a career as a Software Developer after completing the Coding Bootcamp at The University of Richmond. I came to this career thanks to my deep love of learning new things and understanding how things work. I am passionate about growing my knowledge and becoming the best developer I can be through first hand experience and traditional learning.</p>

      <section className="flex grid-cols-3 justify-center items-top">
        <div className="p-5 w-3/10">
          <Image
            className=""
            src={Headshot}
          />
          <h2 className="mt-5">Full-Stack Development</h2>
          <p>I have a talent for communication that many in the software development world tend to lack, and this has been highly valuable in my work as a developer. I have the skills to understand user issues, how to address them professionally, and then communicate them in a way that other Developers and Engineers can understand. This is also key in communication with stakeholders who technically minded professionals often struggle with communicating with. I have also been responsible for the full-stack development of multiple company websites.</p>
        </div>
        <div className="p-5 w-3/10">
          <Image
            className=""
            src={Headshot}
          />
          <h2 className="mt-5">Marketing</h2>
          <p>I have overseen various online marketing initiatives, including the development and implementation of major SEO and AI-SEO workflows that brought significant improvements to sites that were implementing them, as well as launched AI powered geofencing/geotargeting campaigns that saw major increases to online exposure. I also have helped individual sales producers elevate their personal brand view email marketing and strategic content pipelines.</p>
        </div>
        <div className="p-5 w-3/10">
          <Image
            className=""
            src={Headshot}
          />
          <h2 className="mt-5">Project Management</h2>
          <p>In my career, I have managed numerous major projects including the full brand refresh of the company WorkRocket. As well as the overhaul of the online presence of the company PeopleSolutions.</p>
        </div>

      </section>

      <section className="ml-5">
        <h2>Resume</h2>
        <div>
          <h3>Company</h3>
          <h4>2020 - 2026</h4>
          <div id="Break" className="border size-1/2 mt-5"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        </div>
      </section>
    </main>

  );
}