import { styled } from "@stitches/react";

import { ThemeToggle } from "../theme-toggle";
import { Chill } from "../chill";

const Navigator = styled("nav", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: ".5em",
});

export const Nav = () => {
  return (
    <Navigator>
      <Chill />
      <ThemeToggle />
    </Navigator>
  );
};
