import FeedOfArt from "./FeedOfArt";
import FeedOfPortfolio from "./FeedOfPortfolio";
import FeedOfTutorial from "./FeedOfTutorial";

import NavBar from "./Navbar";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  currentPage: string;
}

const Feed = ({ currentPage }: Props) => {
  const [page, setPage] = useState("portfolio");
  return (
    <>
      <Stack top="238px" position="fixed" zIndex={99} width="100%" bg="white">
        <NavBar
          navigate={(buttonName) => {
            setPage(buttonName);
          }}
        />
      </Stack>
      <Stack
        paddingTop="286px"
        paddingBottom="48px"
        overflowY="scroll"
        bg="white"
      >
        {page == "portfolio" && <FeedOfPortfolio></FeedOfPortfolio>}
        {page == "art" && <FeedOfArt></FeedOfArt>}
        {page == "tutorial" && <FeedOfTutorial></FeedOfTutorial>}
      </Stack>
    </>
  );
};

export default Feed;
