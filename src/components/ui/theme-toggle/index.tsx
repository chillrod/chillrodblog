import { useEffect, useState } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
    <IconButton
      justifySelf="end"
      aria-label="change color mode"
      onClick={() => toggleColor()}
      icon={colorIcons[colorMode]}
    />
  );
};
