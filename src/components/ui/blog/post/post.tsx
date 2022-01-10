import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Grid, Box, Avatar, Heading, Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const nessUrl =
  "https://img.search.brave.com/mFk0U_ecwBWbBjHA6zaQH67ojw78d8Ptcx1vu8PIPpY/fit/380/530/ce/1/aHR0cDovL3BpeGVs/YXJ0bWFrZXIuY29t/L2FydC9kZWNmMjE1/NTVmZTRlY2MucG5n";

export const Post = <T extends { text: string; title: string; date: string }>({
  text,
  title,
  date,
}: T) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    setAudio(new Audio("./fx/click.wav"));
  }, []);

  return (
    <Grid
      onMouseEnter={() => audio?.play()}
      gap={3}
      border="1px"
      padding={3}
      borderColor="gray.900"
      borderRadius={4}
      boxShadow="xs"
      _hover={{
        transform: "translateY(-2%)",
      }}
    >
      <Avatar size="xl" gridColumn={1} src={nessUrl} name="Ness" />
      <Box gridColumn={2}>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Text fontSize="xs">{date}</Text>
        <Text fontSize="md">{text}</Text>
        <Link marginTop={2} display="flex" gap={1} alignItems="center">
          <ArrowForwardIcon
            fontSize="md"
            color="blue.500"
            _hover={{
              transform: "translateX(5%)",
              color: "blue.200",
            }}
          />
          <Text fontSize="md">Read more...</Text>
        </Link>
      </Box>
    </Grid>
  );
};
