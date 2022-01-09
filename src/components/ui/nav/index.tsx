import { Grid } from "@chakra-ui/react";

import { ThemeToggle } from "../theme-toggle";
import { Chill } from "../chill";

export const Nav = () => {
  return (
    <Grid templateColumns="1fr 1fr">
      <Chill />
      <ThemeToggle />
    </Grid>
  );
};
