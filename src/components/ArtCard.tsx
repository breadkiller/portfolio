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
        <Heading size="sm" color="blue.700">
          {art.name.toUpperCase()}
        </Heading>

        <Text size="sm" color="blue.700">
          {art.date}
        </Text>
      </CardBody>
      <Divider color="gray.200" />
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="solid"
            color="white"
            background="blue.700"
            _hover={{ background: "blue.900" }}
          >
            Detail
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ArtCard;
