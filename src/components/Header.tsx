import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import btn1 from "../assets/btn1.png";
import btn2 from "../assets/btn2.png";

const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text as="b" fontSize="xl">
          b k v o x e l
        </Text>
      </HStack>
      <HStack>
        <Image src={btn1} boxSize="60px"></Image>
        <Image src={btn2} boxSize="60px"></Image>
      </HStack>
    </HStack>
  );
};

export default Header;
