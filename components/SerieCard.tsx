import React from "react";
import { urlFor } from "../sanity";
import Link from "next/link";
import { Series } from "../typings";

type Props = {
  serie: Series;
};

export default function SerieCard({ serie }: Props) {
  console.log();
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={urlFor(serie?.image).url()}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {serie.title}
            </h2>
            <p className="dark:text-gray-100">{serie.description}</p>
          </div>
          <Link href={`/series/${serie.slug.current}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Mon avis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
