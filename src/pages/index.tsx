import type { NextPage } from "next";
import Head from "next/head";

import { getCssText } from "../config/stitches";

import { Container } from "@chakra-ui/react";

import { Nav } from "../components/ui/nav";
import { Main } from "../components/ui/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <title>chillrod</title>
        <meta name="chillrod blog" content="devs" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <Container maxW="container.md">
        <Nav />
        <Main />
      </Container>
    </>
  );
};

export default Home;
