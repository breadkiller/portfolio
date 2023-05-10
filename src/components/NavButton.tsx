import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  click: (children: string) => void;
}

const NavButton = ({ children, click }: Props) => {
  return (
    <Button
      color="blue.700"
      variant="link"
      size="lg"
      onClick={() => click(children)}
    >
      {children}
    </Button>
  );
};

export default NavButton;
