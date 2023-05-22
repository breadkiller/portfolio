import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Art } from "../hooks/useArt";

interface Props {
  art: Art;
}

const ArtCard = ({ art }: Props) => {
  return (
    <Card
      borderRadius="0px"
      border="solid"
      borderColor="gray.100"
      background="white"
      overflow="hidden"
      boxShadow="none"
    >
      <Image src={art.image}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <VStack align="left">
            <Heading size="sm" color="blue.700">
              {art.name.toUpperCase()}
            </Heading>

            <Text size="sm" color="blue.700">
              {art.date}
            </Text>
          </VStack>
          <Button
            variant="solid"
            color="white"
            background="blue.700"
            _hover={{ background: "blue.900" }}
          >
            Detail
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ArtCard;
