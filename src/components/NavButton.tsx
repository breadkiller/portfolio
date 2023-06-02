import { Button } from "@chakra-ui/react";

interface Props {
  buttonName: string;
  click: (children: string) => void;
}

const NavButton = ({ buttonName, click }: Props) => {
  return (
    <Button
      color="blue.700"
      variant="link"
      size="lg"
      onClick={() => click(buttonName)}
    >
      {buttonName}
    </Button>
  );
};

export default NavButton;
