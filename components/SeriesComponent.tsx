import React from "react";
import { Series } from "../typings";
import SerieCard from "./SerieCard";

type Props = {
  series: Series[];
};

export default function SeriesComponent({ series }: Props) {
  return (
    <div
      id="Series"
      className="pt-24 flex flex-wrap justify-center gap-12 dark:text-gray-100 bg-white px-10"
    >
      {series?.map((serie) => (
        <SerieCard key={serie?._id} serie={serie} />
      ))}
    </div>
  );
}
