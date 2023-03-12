import React from "react";
import GameCard from "./GameCard";

type Props = {};

export default function Games({}: Props) {
  return (
    <div
      id="Games"
      className="pt-24 flex flex-wrap justify-center gap-12 dark:text-gray-100 bg-white px-10"
    >
      <GameCard />

      <GameCard />

      <GameCard />

      <GameCard />
    </div>
  );
}
