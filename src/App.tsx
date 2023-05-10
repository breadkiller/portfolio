import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
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
      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
