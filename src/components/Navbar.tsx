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
        width="80%"
        borderTop="solid"
        borderLeft="none"
        borderRight="none"
        borderBottom="solid"
        borderColor="gray.100"
      >
        <NavButton
          children="Portfolio"
          click={() => {
            console.log("P");
          }}
        ></NavButton>
        <NavButton
          children="Art"
          click={() => {
            console.log("A");
          }}
        ></NavButton>
        <NavButton
          children="Tutorial"
          click={() => {
            console.log("T");
          }}
        ></NavButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
