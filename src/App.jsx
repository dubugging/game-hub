import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import SortGamesMenu from "./components/SortGamesMenu";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatfrom] = useState(null);
  const [sortValue, setSortValue] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "225px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar onSearch={(searchText) => setSearchText(searchText)}></Navbar>
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameHeading
          platform={selectedPlatform}
          genre={selectedGenre}
        ></GameHeading>
        <HStack spacing={3} marginLeft={5}>
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
          searchText={searchText}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
