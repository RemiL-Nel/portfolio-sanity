import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

type Props = {
  project: Project;
};

export default function Post({ project }: Props) {
  return <div>{project.title}</div>;
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

  if (!project) {
    return {
      notFound: true,
    };
  } else
    return {
      props: {
        project,
      },
    };
};
