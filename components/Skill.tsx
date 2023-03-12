import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";
type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex flex-col"
    >
      <h5 className="font-semibold text-center">{skill.title}</h5>
      <img
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-contain w-16 h-16 xl:w-32 xl:h-32"
      />
    </motion.div>
  );
}
