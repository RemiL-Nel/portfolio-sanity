import Link from "next/link";
import React from "react";

type Props = {};

export default function notFound({}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen flex flex-col">
      <div className=" mt-[100px] flex justify-center align-center">
        <Link href="./">
          <p className=" text-white uppercase text-center hidden md:inline-flex text-xl cursor-pointer underline decoration-[#61DBFB] animate-pulse">
            {"-> Page principale -<"}
          </p>
        </Link>
      </div>
      <div className="flex flex-col justify-center align-center">
        <h1 className=" text-white text-4xl text-center">Erreur 404</h1>
        <p className=" text-white text-2xl text-center">
          Il semblerait que vous vous êtes trompé de chemin...
        </p>
      </div>
    </div>
  );
}
