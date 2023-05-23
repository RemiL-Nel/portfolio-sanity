import Head from "next/head";
import React from "react";
import Header from "./Header";

type Props = {};

export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <Head>
        <title>Portfolio de Rémi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
