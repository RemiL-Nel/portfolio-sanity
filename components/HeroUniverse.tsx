import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function HeroUniverse({}: Props) {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-[600px]">
      <div className="flex justify-center align-center">
        <Link href="./">
          <p className=" uppercase text-center hidden md:inline-flex text-xl cursor-pointer underline decoration-[#61DBFB] animate-pulse">
            {"-> page précédente -<"}
          </p>
        </Link>
      </div>
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Je vais vous parler de{" "}
          <span className="text-[#61DBFB]">mon univers.</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Mes passe-temps ainsi que mes passions, sur cette page se retrouvera
          tout ce que j'aime faire dans la vie.
        </p>
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: [30, 0, 30],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="flex flex-wrap justify-center absolute top-[470px] z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
        <svg
          className="cursor-pointer absolute top-[487px] left-[883px]"
          viewBox="0 0 30 20"
        >
          <path fill="#1F2937" fill-opacity="1" d="M 0 0 L 2 3 L 4 0" />
        </svg>
      </div>
    </section>
  );
}
