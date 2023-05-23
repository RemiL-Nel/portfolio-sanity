import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <>
      <div>
        <Link href="./myUniverse">
          <p className=" relative z-30 uppercase text-center hidden md:inline-flex text-xl cursor-pointer underline decoration-[#61DBFB] animate-pulse">
            {"-> Découvrir mon Univers -<"}
          </p>
        </Link>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [4, 1],
          opacity: [0.05, 0.1, 0.2, 0.4, 0.6, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-[#a3edff] rounded-full h-[200px] w-[200px] opacity-30 animate-ping mt-52" />
        <div className="absolute border border-[#baf1ff] rounded-full h-[300px] w-[300px] opacity-20 animate-ping mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping mt-52" />
        <div className="absolute border-4 border-[#61DBFB] rounded-full h-[150px] w-[150px] opacity-20 animate-pulse mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] opacity-10 animate-ping mt-52" />
      </motion.div>
    </>
  );
}
