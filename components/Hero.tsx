import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Bonjour, je suis ${pageInfo?.name} `,
      "Je suis <Développeur />",
      "class <NextJS /> extends <React />",
      "import <Sanity /> from '../backend'",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Moi"
        width={300}
        height={300}
        className="relative rounded-full h-32 w-32 mx-auto object-cover top-[8px]"
      />
      <h1 className="text-xl lg:text-2xl font-semibold px-10">
        <span className="text-[#b0efff]">{text}</span>

        <Cursor cursorColor="#61DBFB" />
      </h1>
      <div className="z-20">
        <Link href="#about">
          <button className="heroButton">À Propos</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projets</button>
        </Link>
      </div>
    </div>
  );
}
