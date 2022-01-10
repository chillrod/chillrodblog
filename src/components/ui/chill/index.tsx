import { ArrowUpDownIcon, AtSignIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const Chill = ({ noMenu = false }: { noMenu?: boolean }) => {
  return (
    <Box>
      <Heading as="h1" size="xl" paddingTop={0}>
        chillrod
      </Heading>
      {noMenu && (
        <Badge colorScheme="purple" fontSize="md">
          .dev
        </Badge>
      )}

      {!noMenu && (
        <Menu>
          <MenuButton
            _focus={{
              border: "1px",
              borderColor: "purple.500",
              borderRadius: 5,
            }}
          >
            <Badge colorScheme="purple" cursor="pointer" fontSize="xl">
              .dev
            </Badge>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <AtSignIcon />
              blog
            </MenuItem>
            <MenuItem>
              <ArrowUpDownIcon />
              playground
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
};
