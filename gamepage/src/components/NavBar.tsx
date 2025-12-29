import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack padding="10px" gap={200}>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeButton />
      </HStack>
    </>
  );
}

export default NavBar;
