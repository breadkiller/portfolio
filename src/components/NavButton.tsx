import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
}

const NavButton = ({ children }: Props) => {
  return (
    <Button color="blue.700" variant="link" size="lg">
      {children}
    </Button>
  );
};

export default NavButton;
