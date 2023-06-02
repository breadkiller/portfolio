import { Stack } from "@chakra-ui/react";
import NavButton from "./NavButton";

interface Props {
  navigate: (children: string) => void;
}

const NavBar = ({ navigate }: Props) => {
  return (
    <Stack align="center">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        height="48px"
        width={{ base: "80%", xl: "1024px" }}
        borderTop="solid"
        borderLeft="none"
        borderRight="none"
        borderBottom="solid"
        borderColor="gray.100"
      >
        <NavButton
          buttonName="Portfolio"
          click={() => {
            navigate("portfolio");
          }}
        ></NavButton>
        <NavButton
          buttonName="Art"
          click={() => {
            navigate("art");
          }}
        ></NavButton>
        <NavButton
          buttonName="Tutorial"
          click={() => {
            navigate("tutorial");
          }}
        ></NavButton>
      </Stack>
    </Stack>
  );
};

export default NavBar;
