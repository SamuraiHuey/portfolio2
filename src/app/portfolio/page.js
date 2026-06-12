import Image from "next/image.js";
import Header from "../header.js"
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main>
      <h1 class="title border">Portfolio</h1>
      <p class="pl-4">From Full-Stack Development to SEO and Marketing.</p>

      <div class="flex items-center mt-5">
        <Image
          class=""
          src={Headshot}
        />
        <p class="p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>

      </div>
    </main>

  );
}