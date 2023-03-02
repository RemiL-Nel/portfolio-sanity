import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import ExperienceComponent from "../components/ExperienceComponent";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import {} from "next-sanity";
import { sanityClient } from "../sanity";

interface Props {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  console.log(experiences);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#61DBFB]/50 ">
      <Head>
        <title>Portfolio de {pageInfo?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <ExperienceComponent experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({ params, locales }: any) => {
  const experienceQuery = `*[_type == "experience"]{
jobTitle,
companyImage,
company,
dateStarted,
dateEnded,
isCurrentlyWorkingHere,
technologies[]->{
  title,
  image,
},
points,
}`;
  const experiences = await sanityClient.fetch(experienceQuery);

  const pageInfoQuery = `*[_type == "pageInfo"][0]`;

  const pageInfo = await sanityClient.fetch(pageInfoQuery);

  const projectQuery = `*[_type == "project"] {
  ...,
  technologies[]->
}`;

  const projects = await sanityClient.fetch(projectQuery);

  const skillQuery = `*[_type == "skill"]`;

  const skills = await sanityClient.fetch(skillQuery);

  const socialQuery = `*[_type == "social"]`;

  const socials = await sanityClient.fetch(socialQuery);

  return {
    props: {
      experiences,
      pageInfo,
      projects,
      skills,
      socials,
    },
  };
};
