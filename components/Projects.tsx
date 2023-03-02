import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projets
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DBFB]/50">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="project image"
              className="w-60"
            />
            {/* bug ici l'image n'apparaît pas */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center underline decoration-[#61DBFB]/80">
                <span>
                  Nom de projet {i + 1} / {projects?.length} :
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex  flex-row items-center space-x-2 justify-center p-6 gap-4">
                {project?.technologies.map((technology) => (
                  <Image
                    width={300}
                    height={300}
                    className="h-10 w-10 object-contain"
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt="technology used"
                  />
                ))}
              </div>

              <p className="text-xl text-center ">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#61DBFB]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
