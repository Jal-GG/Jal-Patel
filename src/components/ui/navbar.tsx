import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/nk-logo.png";

function Navbar() {
  return (
    <div className="sticky top-0 w-full px-2 bg-[#fefee3] h-[7vh]">
      <nav className="flex justify-between items-center max-w-xl mx-auto h-full px-6 py-2 border-b border-b-gray-400">
        <Link href={`/`}>
          <Image src={Logo} alt="logo" width={25} height={25}/>
        </Link>
        <div className="text-neutral-500">
          <div className="flex items-center gap-3">
            <Link href={`https://github.com/Jal-GG`} target="_blank">
              <p className="text-sm hover:text-black ease-in duration-200">
                projects
              </p>
            </Link>
            {/* <Link href={`/blog`}>
              <p className="text-sm hover:text-black ease-in duration-200">
                posts
              </p>
            </Link> */}
            <Link
              href={
                "https://drive.google.com/file/d/1dSIADQgoLyVwr0axg4NQkYyYkEmIo9J1/view?usp=sharing"
              }
              target="_blank"
            >
              <p className="text-sm hover:text-black ease-in duration-200">
                resume
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
