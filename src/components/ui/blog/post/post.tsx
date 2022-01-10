import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Grid, Avatar, Heading, Text, Link, Flex } from "@chakra-ui/react";

const nessUrl =
  "https://img.search.brave.com/mFk0U_ecwBWbBjHA6zaQH67ojw78d8Ptcx1vu8PIPpY/fit/380/530/ce/1/aHR0cDovL3BpeGVs/YXJ0bWFrZXIuY29t/L2FydC9kZWNmMjE1/NTVmZTRlY2MucG5n";

export const Post = <T extends { text: string; title: string; date: string }>({
  text,
  title,
  date,
}: T) => {
  return (
    <Grid gap={3} padding={3} boxShadow="md">
      <Flex gap={2} align="center">
        <Avatar size="md" src={nessUrl} name="Ness" />
        <Heading as="h2" size="md">
          {title}
        </Heading>
      </Flex>
      <Text fontSize="md" noOfLines={3}>
        {text}
      </Text>
      <Text fontSize="xs">Posted on: {date}</Text>
      <Link
        marginTop={3}
        as="button"
        display="flex"
        alignItems="center"
        gap={2}
      >
        <ArrowForwardIcon
          fontSize="md"
          color="purple.500"
          _hover={{
            transform: "translateX(5%)",
            color: "purple.200",
          }}
        />
        <Text fontSize="md">Read more...</Text>
      </Link>
    </Grid>
  );
};
