import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm" fontSize="md" borderRadius={8}>
          Order <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="a">Relevance</Menu.Item>
            <Menu.Item value="a">Date Added</Menu.Item>
            <Menu.Item value="a">Name</Menu.Item>
            <Menu.Item value="a">Release Date</Menu.Item>
            <Menu.Item value="a">Popularity</Menu.Item>
            <Menu.Item value="a">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
