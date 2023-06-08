import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import React from "react";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { PageInfo, Project, Social } from "../../typings";

type Props = {
  project: Project;
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Post({ project, socials, pageInfo }: Props) {
  return (
    <div>
      <Header socials={socials} pageInfo={pageInfo} />

      <div className="flex justify-center min-h-screen bg-gray-800 space-x-14 text-white">
        <div className="">
          <div className="flex space-x-12">
            <iframe
              className="bg-white mt-[50px] pointer-events-none lg:pointer-events-auto rounded-md border-2 border-violet-400"
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="500"
              height="800"
              src={project.linkToBuild}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center space-y-8 ">
          <img
            src={urlFor(project?.image).url()}
            className="w-40 object-contain text-center"
          />
          <h1 className=" text-center font-bold text-5xl">
            Projet : {project.title}
          </h1>
          <div className=" w-96 mx-auto justify-center">
            <h2 className=" font-semibold  text-center w-full ">
              {project.summary}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = groq`
  *[_type == "project"]{
    _id,
    slug {
      current
    }
    
  }
  `;
  const projects = await sanityClient.fetch(query);

  const paths = projects.map((project: Project) => ({
    params: {
      slug: project.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = groq`
  *[_type=='project' && slug.current == $slug][0]
  {
    ...,
  }
  `;
  const project = await sanityClient.fetch(query, { slug: params?.slug });

  const socialQuery = `*[_type == "social"]`;

  const socials = await sanityClient.fetch(socialQuery);

  const pageInfoQuery = `*[_type == "pageInfo"][0]`;

  const pageInfo = await sanityClient.fetch(pageInfoQuery);

  if (!project) {
    return {
      notFound: true,
    };
  } else
    return {
      props: {
        project,
        socials,
        pageInfo,
      },
    };
};
