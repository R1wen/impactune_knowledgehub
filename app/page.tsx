import Image from "next/image";
import About from "@/src/sections/About";
import BibliothequeSection from "@/src/sections/BibliothequeSection";


export default function Home() {
  return (
    <div>
      <About/>
      <BibliothequeSection/>
    </div>
  );
}
