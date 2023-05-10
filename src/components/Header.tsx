import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import title from "../assets/title.png";
import btn1 from "../assets/btn1.png";
import btn2 from "../assets/btn2.png";

const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="48px"></Image>
        <Image src={title} height="48px"></Image>
      </HStack>
      <HStack>
        <Image src={btn1} boxSize="48px"></Image>
        <Image src={btn2} boxSize="48px"></Image>
      </HStack>
    </HStack>
  );
};

export default Header;
