import type { NextPage } from "next";
import Head from "next/head";

import { Nav } from "../components/ui/nav";
import { Container } from "@chakra-ui/react";
import { Main } from "../components/ui/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
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
