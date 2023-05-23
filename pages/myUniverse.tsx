import React from "react";
import SeriesComponent from "../components/SeriesComponent";
import HeroUniverse from "../components/HeroUniverse";
import { sanityClient } from "../sanity";
import { Series } from "../typings";

interface Props {
  series: Series[];
}

export default function myUniverse({ series }: Props) {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col space-y-4 pt-20 max-w-screen w-screen overflow-x-hidden ">
      <HeroUniverse />
      <SeriesComponent series={series} />
    </div>
  );
}
export const getServerSideProps = async ({ params, locales }: any) => {
  const seriesQuery = `*[_type == "series"]`;

  const series = await sanityClient.fetch(seriesQuery);
  return {
    props: {
      series,
    },
  };
};
