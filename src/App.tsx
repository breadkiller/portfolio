import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import ArtCardContainer from "./components/ArtCardContainer";
function App() {
  return (
    <Grid
      templateAreas={`
    "header header" 
    "info info"
    "bar bar"
    "main main"
    `}
    >
      <GridItem area="header" bg="blue.700">
        <Header />
      </GridItem>
      <GridItem area="info" bg="white">
        <Info />
      </GridItem>
      <GridItem area="bar" bg="white">
        <Navbar />
      </GridItem>
      <GridItem area="main" bg="white">
        <ArtCardContainer />
      </GridItem>
    </Grid>
  );
}

export default App;
