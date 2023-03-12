import React from "react";
import Games from "../components/Games";
import HeroUniverse from "../components/HeroUniverse";

type Props = {};

export default function myUniverse({}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] min-h-screen flex flex-col space-y-4 max-w-screen w-screen overflow-x-hidden ">
      <HeroUniverse />
      <Games />
    </div>
  );
}
