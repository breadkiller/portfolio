import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
function App() {
  return (
    <Grid
      templateAreas={`
    "header header" 
    "info info"
    "main main"
    `}
    >
      <GridItem area="header" bg="blue.700">
        <Header></Header>
      </GridItem>
      <GridItem area="info" bg="white">
        <Info></Info>
      </GridItem>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
