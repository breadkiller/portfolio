import { Grid, GridItem, Flex, Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import Feed from "./components/Feed";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Art");
  return (
    <>
      {/* Fixed Header */}
      <Stack top={0} position="fixed" zIndex={99} width="100%" bg="white">
        <Stack bg="blue.700">
          <Header />
        </Stack>
        <Info />
      </Stack>
      <Feed currentPage="art" />
    </>
  );
}

export default App;
