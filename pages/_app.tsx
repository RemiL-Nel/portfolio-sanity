import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { PageInfo, Social } from "../typings";
type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

function MyApp(
  { Component, pageProps }: AppProps,
  { socials, pageInfo }: Props
) {
  return (
    <>
      <Layout socials={socials} pageInfo={pageInfo} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
