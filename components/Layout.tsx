import Head from "next/head";
import React from "react";
import { PageInfo, Social } from "../typings";
import Header from "./Header";
type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Layout({ socials, pageInfo }: Props) {
  return (
    <>
      <Head>
        <title>Portfolio de Rémi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
