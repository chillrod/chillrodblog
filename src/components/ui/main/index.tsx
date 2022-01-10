import { Code, Grid, Heading, Text } from "@chakra-ui/react";

import { NewsLetterInput } from "../newsletter-input";

export const Main = () => {
  return (
    <Grid gap={5} alignItems="center" paddingTop={10}>
      <Heading>
        <Grid templateColumns="1fr" gap={2}>
          <Code fontSize="xl" justifySelf="start">
            mild high self taught club
          </Code>
        </Grid>
      </Heading>
      <Text>
        Welcome to the self taught frontend devs community. Our goal is to
        connect, teach and collaborate with self taught developers. We all know
        how motivated you have to be while studying frontend on your own. Join
        us and collaborate.
      </Text>
      <NewsLetterInput />
    </Grid>
  );
};
