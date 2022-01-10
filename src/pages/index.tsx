import type { NextPage } from "next";

import Head from "next/head";

import { Container } from "@chakra-ui/react";

import { Nav } from "../components/ui/nav";
import { Main } from "../components/ui/main";
import { Blog } from "../components/ui/blog/blog";

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
        <Blog />
      </Container>
    </>
  );
};

export default Home;
