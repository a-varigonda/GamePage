import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden" width={250}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
