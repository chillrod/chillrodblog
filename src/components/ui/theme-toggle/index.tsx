import { useEffect, useState } from "react";

import { styled } from "../../../config/stitches";

import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Toggle = styled(Button, {
  justifySelf: "end",
});

export const ThemeToggle = () => {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  const { colorMode, toggleColorMode } = useColorMode();

  const colorIcons = {
    light: <SunIcon />,
    dark: <MoonIcon />,
  };

  const toggleColor = async () => {
    await audio?.play();
    toggleColorMode();
  };

  useEffect(() => {
    setAudio(new Audio("./fx/click.wav"));
  }, []);

  return (
    <Toggle size="sm" onClick={() => toggleColor()}>
      {colorIcons[colorMode]}
    </Toggle>
  );
};
