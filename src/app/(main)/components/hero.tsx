import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";
import { SiDevdotto, SiGithub, SiLinkedin } from "react-icons/si";

function HeroSection() {
  return (
    <div className="pb-[10vh]">
      <div>
        <h2 className="font-extrabold">Jal Patel</h2>
        <p className="text-neutral-500">
          Software Engineer • Python • JavaScript
        </p>
        <p className="text-neutral-500">🇮🇳 Gujarat, India</p>
      </div>
      <br />
      <div>
        <p>
          Hi! I&apos;m a software engineer, and i write code in JavaScript and Python.
        </p>
        <br />
        <p>
          Currently, I&apos;m exploring the world of FullStack Developer with various tech stacks. When
          I&apos;m not writing code, you&apos;d catch me finishing up an episode
          or two of{" "}
          <Link
            target="_blank"
            href={
              "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece?srsltid=AfmBOor3cCPMmv5-M71oebcnEvY4pzofcPBbnmQB57s4d_xeDiSDeX1O"
            }
            className="underline"
          >
            One Piece
          </Link>
          .
        </p>
        <div className="flex flex-row justify-between items-center gap-5 my-5">
          <Link href={"mailto:jalpatelreply@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <BiEnvelope />
              <p className="text-sm mt-0">contact</p>
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={"https://github.com/Jal-GG"}
              target="_blank"
              className="text-2xl"
            >
              <SiGithub />
            </Link>
            {/* <Link
              href={""}
              target="_blank"
              className="text-2xl"
            >
              <SiDevdotto />
            </Link> */}
            <Link
              href={
                "https://www.linkedin.com/in/jal-patel-4aa8b8243/"
              }
              target="_blank"
              className="text-2xl"
            >
              <SiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
