import { Box, Divider, Grid, Link, Text } from "@chakra-ui/react";
import { Chill } from "../chill";
import { NewsLetterInput } from "../newsletter-input";

export const Footer = () => {
  return (
    <Grid paddingY={20} gap={4}>
      <Divider />
      <Chill noMenu />
      <Text>
        Send me a mail at{" "}
        <Link href="mailto:chillrod77@gmail.com">chillrod77@gmail.com</Link>
      </Text>
      <Link href="http://www.github.com/chillrod" target="_blank">
        Github
      </Link>
      <Link href="http://www.linkedin.com/in/rod77" target="_blank">
        Linkedin
      </Link>
      <Box>
        <NewsLetterInput isSm />
      </Box>
    </Grid>
  );
};
