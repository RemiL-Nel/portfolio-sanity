import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col text-center  gap-12 max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        À Propos
      </h3>
      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-65 md:h-96 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#61DBFB]/50">Petite</span>{" "}
          introduction..
        </h4>
        <p className="text-xl">{pageInfo?.backgroundInformation}</p>
      </div>
    </div>
  );
}
