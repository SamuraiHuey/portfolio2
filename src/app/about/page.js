import Image from "next/image.js";
import Headshot from "../../../public/jpeg/Headshot-B&W.jpg"

export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <h1 className="title">About</h1>
      <div className="flex items-center">
        <p>I grew up in Mechanicsville, Virginia. My dad was an engineer, my mom was a school teacher, and I spent most of my childhood taking things apart to see how they worked. That tendency stuck. As a kid, I was introduced to motorsport and became instantly obsessed with it. Enamored with the way a race car is a thousand interdependent systems all being pushed to their limit at once, alongside the driver, appealed to the same part of my brain. Later on in my childhood I got into music, joined my school’s concert band, and later the marching band. This eventually led to me auditioning for the <Link className="underline" href="https://en.wikipedia.org/wiki/The_Cadets_Drum_and_Bugle_Corps">Cadets Drum and Bugle Corps</Link> program where I spent three years marching. It’s a grueling program and I learned a lot about what it takes to perform consistently at a high level under huge amounts of stress.<br />
<br/>
          After high school things got hard for a while. I had planned on studying music education but it didn’t work out, and at one point I was sleeping in my car. What came out of that period was a pretty clear picture of what I actually wanted to do with my time. I’ve always gravitated toward figuring out how things work, so software made sense. I completed the coding bootcamp at the University of Richmond, got my first development job, and have been doing this work ever since.
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