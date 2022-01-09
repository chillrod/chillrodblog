import { styled } from "@stitches/react";

import { Button, useColorMode } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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

  return <Toggle size="sm" onClick={() => toggleColor()}>{colorIcons[colorMode]}</Toggle>;
};
