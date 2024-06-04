import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import SortGamesMenu from "./components/SortGamesMenu";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatfrom] = useState(null);
  const [sortValue, setSortValue] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "17% 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack spacing={25} paddingLeft={20} marginBottom={5}>
          <PlatformMenu
            selectedPlatform={selectedPlatform}
            handlePlatformSelect={(value) => setSelectedPlatfrom(value)}
          ></PlatformMenu>
          <SortGamesMenu
            handleSelectedSortValue={(value) => setSortValue(value)}
            selectedSortValue={sortValue}
          ></SortGamesMenu>
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          sortValue={sortValue}
          selectedPlatform={
            selectedPlatform ? selectedPlatform.id : selectedPlatform
          }
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
