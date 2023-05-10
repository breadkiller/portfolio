import { Stack } from "@chakra-ui/react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <Stack align="center">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        height="48px"
        width="72%"
        borderTop="solid"
        borderLeft="none"
        borderRight="none"
        borderBottom="solid"
        borderColor="gray.100"
      >
        <NavButton children="Portfolio"></NavButton>
        <NavButton children="Art"></NavButton>
        <NavButton children="Tutorial"></NavButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
