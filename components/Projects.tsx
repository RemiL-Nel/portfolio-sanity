import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="  flex overflow-hidden flex-col  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projets
      </h3>
      <div className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DBFB]/50">
        <Swiper
          slidesPerView={1}
          spaceBetween={60}
          mousewheel={false}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects?.map((project, i) => (
            <SwiperSlide>
              <div
                key={project?._id}
                className=" flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20"
              >
                <img
                  src={urlFor(project?.image).url()}
                  alt="project image"
                  className="w-36 xl:w-60"
                />
                {/* bug ici l'image n'apparaît pas */}
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center underline decoration-[#61DBFB]/80">
                    <span>
                      Nom de projet {i + 1} / {projects?.length} :
                    </span>{" "}
                    {project?.title}
                  </h4>
                  <div className="flex  flex-row items-center space-x-3 justify-center p-6 ">
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

                  <p className=" text-center ">{project?.summary}</p>
                </div>
                <a
                  href={project.linkToBuild}
                  className=" w-60 text-center text-2xl border border-t-[#61DBFB] border-x-0 border-b-0 underline decoration-[#61DBFB]/80"
                >
                  Visiter
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
