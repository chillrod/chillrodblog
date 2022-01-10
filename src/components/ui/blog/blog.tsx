import { ArrowRightIcon } from "@chakra-ui/icons";
import { Grid, Heading, Link, Text } from "@chakra-ui/react";
import { Post } from "./post/post";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const posts = [
  {
    text: lorem,
    title: "rod",
    date: "20/01/2020",
  },
  {
    text: lorem,
    title: "beto",
    date: "20/01/2020",
  },
  {
    text: lorem,
    title: "patro",
    date: "20/01/2020",
  },
];

export const Blog = () => {
  return (
    <>
      <Grid gap={12} paddingTop={20}>
        <Heading as="h2">Featured posts</Heading>
        {posts.map((post) => (
          <Post text={post.text} title={post.title} date={post.date} />
        ))}
        <Link
          display="flex"
          alignItems="center"
          gap={2}
          fontSize="xl"
          opacity={0.7}
        >
          <Text>Read all posts</Text>
          <ArrowRightIcon fontSize="md" />
        </Link>
      </Grid>
    </>
  );
};
