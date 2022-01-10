import { Grid } from "@chakra-ui/react";
import { Post } from "./post/post";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
export const Blog = () => {
  return (
    <Grid gap={5} paddingTop={20}>
      <Post text={lorem} title="rod" date="20/01/2020" />
      <Post text={lorem} title="rod" date="20/01/2020" />
      <Post text={lorem} title="rod" date="20/01/2020" />
    </Grid>
  );
};
