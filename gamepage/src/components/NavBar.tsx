import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <Text>NavBar</Text>
        <SearchInput />
        <ColorModeButton />
      </HStack>
    </>
  );
}

export default NavBar;
