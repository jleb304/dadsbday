import {
  HStack,
  Text,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Show,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const TopBar = () => {
  return (
    <HStack
      w="100%"
      textAlign="center"
      alignItems="center"
      paddingLeft='20px'
      minH="50px"
      color='#fff'
      bg="#515031"
      borderBottom="1px"
      borderStyle="solid"
    >
      <Show below="md">
        <Menu background='#515031'>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghost"
            color='#fff'
          />
          <MenuList background='#515031'>
            <MenuItem background='#515031'>
              <Link as={RouterLink} to="/">
                Gallery
              </Link>
            </MenuItem>
            <MenuItem background='#515031'>
              <Link as={RouterLink} to="/contact">
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
      <Text fontSize='24px' letterSpacing='2px' fontWeight='bold'>LEBLADES</Text>
    </HStack>
  );
};

export { TopBar };
