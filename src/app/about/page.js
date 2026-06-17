import Image from "next/image.js";
import Header from "../header.js"
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main class="border border-green-400 flex flex-col p-5">
      <h1 class="title">About</h1>
      <div class="flex items-center">
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        <Image
        className=""
        src= {Headshot} 
        sizes="50vw"
        />
      </div>
    </main>

  );
}