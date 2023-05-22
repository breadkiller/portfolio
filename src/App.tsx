import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import ArtCardContainer from "./components/ArtCardContainer";
import Feed from "./components/Feed";
function App() {
  return (
    <Grid
      templateAreas={`
    "header header" 
    "info info"
    "bar bar"
    "main main"
    `}
      bg="white"
    >
      <GridItem area="header" bg="blue.700">
        <Header />
      </GridItem>
      <GridItem area="info">
        <Info />
      </GridItem>
      <GridItem area="bar">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <Feed />
      </GridItem>
    </Grid>
  );
}

export default App;
