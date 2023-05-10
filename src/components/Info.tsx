import {
  HStack,
  Image,
  Text,
  Stack,
  VStack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { BsTwitter, BsInstagram, BsGlobe } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";

import avatar from "../assets/bkvoxel.gif";

const Info = () => {
  return (
    <Stack align="center">
      <HStack
        justifyContent={{ base: "left", lg: "center" }}
        margin="24px"
        overflow="auto"
        width="80%"
      >
        {/* Avatar Image */}
        <Image
          src={avatar}
          boxSize="108px"
          borderRadius="8px"
          marginRight="48px"
        ></Image>

        {/* Info Area */}
        <VStack justifyContent="space-between" align="stretch">
          <Text as="b" fontSize="xl" color="blue.900">
            bkvoxel
          </Text>
          <Text color="blue.900">
            Computer Engineer
            <br />
            Voxel Artist
          </Text>
          <HStack>
            <Link href="https://twitter.com/bkvoxel" isExternal>
              <IconButton
                borderRadius="8px"
                colorScheme="blue"
                aria-label="twitter"
                icon={<BsTwitter />}
              />
            </Link>

            <Link href="https://www.instagram.com/bkvoxel/" isExternal>
              <IconButton
                borderRadius="8px"
                colorScheme="blue"
                aria-label="instagram"
                icon={<BsInstagram />}
              />
            </Link>

            <Link href="https://opensea.io/bkvoxel" isExternal>
              <IconButton
                borderRadius="8px"
                colorScheme="blue"
                aria-label="opensea"
                icon={<SiOpensea />}
              />
            </Link>

            <Link href="https://linktr.ee/bkvoxel" isExternal>
              <IconButton
                borderRadius="8px"
                colorScheme="blue"
                aria-label="linktree"
                icon={<BsGlobe />}
              />
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default Info;
