import Image from "next/image.js";
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <h1 className="title">About</h1>
      <div className="flex items-center">
        <p>I grew up in Mechanicsville, a small town just outside of Richmond, Virginia. My parents were an engineer and a school teacher, so from an early age I was taught to ask why things work the way they do. That curiosity shaped everything that came after. At a young age I was introduced to motorsport and fell deeply in love, the precision it demands, the way man and machine operate as one at 200 miles per hour, resonated with something fundamental in me. That same drive for precision led me to music. In middle and high school I performed in concert band, then found my way into the competitive marching arts through my school’s acclaimed program. That experience led me to audition for the Cadets Drum and Bugle Corps, where I spent three years chasing excellence on the field.<br />
<br/>
          After high school, I went through a difficult stretch in my life, at one point I was living out of my car. I had planned to study music education, but circumstances forced me to pivot. What that period taught me was that I work best when I’m solving real problems. That realization, combined with the curiosity that drove so much else in my life, led me to software development. I completed the coding bootcamp at the University of Richmond, and quickly found that the skills I had spent years building — the discipline, the attention to detail, the ability to communicate clearly under pressure — translated directly into this work.
        </p>
        <Image
          className="w-1/2"
          src={Headshot}
          sizes=""
          alt="Headshot of Will Brent with his arms crossed"
        />
      </div>
    </main>

  );
}