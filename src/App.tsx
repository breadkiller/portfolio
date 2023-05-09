import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
function App() {
  return (
    <Grid
      templateAreas={`
    "header header" 
    "profile profile"
    "main main"
    `}
    >
      <GridItem area="header" bg="blue.700">
        <Header></Header>
      </GridItem>
      <GridItem area="profile" bg="white">
        Profile
      </GridItem>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
