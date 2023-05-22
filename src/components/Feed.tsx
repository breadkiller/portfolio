import artData from "../data/artData";
import { HStack, Image, SimpleGrid } from "@chakra-ui/react";
import ArtCard from "./ArtCard";

const Feed = () => {
  return (
    <HStack justifyContent="center" marginTop="24px">
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing="24px"
        width="80%"
      >
        {artData.map((art) => (
          <ArtCard key={art.id} art={art}></ArtCard>
        ))}
      </SimpleGrid>
    </HStack>
  );
};

export default Feed;
