import Image from "next/image.js";
import Header from "../header.js"
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main class="">
      <h1 class="title">Experience</h1>
      <p class="p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>

      <section class="flex items-top">
        <div class="p-5">
        <Image
          class=""
          src={Headshot}
        />
        <h2 class="mt-5">Full-Stack Development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
        </div>
        <div class="p-5">
        <Image
          class=""
          src={Headshot}
        />
        <h2 class="mt-5">Marketing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus. </p>
        </div>
        <div class="p-5">
        <Image
          class=""
          src={Headshot}
        />
        <h2 class="mt-5">Project Management</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. </p>
        </div>
        

      </section>
    </main>

  );
}