import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";
type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between z-20 px-6 py-3 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>{" "}
      <div>
        <Link href="./myUniverse">
          <p className="uppercase text-center hidden md:inline-flex text-xl cursor-pointer underline decoration-[#61DBFB] animate-pulse">
            {"-> Découvrir mon Univers -<"}
          </p>
        </Link>
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">
            Me contacter
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
