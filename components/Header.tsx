import React from "react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";
type Props = {
  socials: Social[];
};

export default function Header() {
  const [socials, setSocials] = useState<any>(null);

  useEffect(() => {
    fetch("/api/fetchSocials", {
      method: "GET",
      // headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((result) => {
            setSocials(result.socials);
          });
        } else if (res.status === 401) {
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(socials);
  return (
    <header className="bg-transparent text-white   fixed top-0 left-0 w-full flex items-start justify-between z-20 px-6 py-3 ">
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
        {socials?.map((social: Social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
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
