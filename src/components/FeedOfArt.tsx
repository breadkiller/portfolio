import artData from "../data/artData";
import { HStack, SimpleGrid } from "@chakra-ui/react";
import CardOfArt from "./CardOfArt";

const FeedOfArt = () => {
  return (
    <HStack justifyContent="center" marginTop="24px">
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing="24px"
        width={{ base: "80%", xl: "1024px" }}
      >
        {artData.map((art) => (
          <CardOfArt key={art.id} art={art}></CardOfArt>
        ))}
      </SimpleGrid>
    </HStack>
  );
};

export default FeedOfArt;
