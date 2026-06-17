import Image from "next/image.js";
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main>
      <h1 className="title border">Portfolio</h1>
      <p className="pl-4">From Full-Stack Development to SEO and Marketing.</p>

      <ul>
      <li class="flex items-center mt-5">
        <Image
          className=""
          src={Headshot}
          sizes="40vw"
        />
        <section className="border">
          <h2 className="border">Title</h2>
          <p className="p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
          <ul className="flex">
            <h3>Skills</h3>
            <li>Development</li>
          </ul>
        </section>
      </li>
      <li class="flex items-center mt-5">
        <section className="border">
          <h2 className="border">Title</h2>
          <p className="p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        </section>
        <Image
          className=""
          src={Headshot}
          sizes="40vw"
        />
      </li>
      <li class="flex items-center mt-5">
        <Image
          className=""
          src={Headshot}
          sizes="40vw"
        />
        <section className="border">
          <h2 className="border">Title</h2>
          <p className="p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        </section>
      </li>
      </ul>
    </main>

  );
}