import { useGame } from "../hooks/useGame";
import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import React from "react";

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  sortValue,
  searchText,
}) => {
  const { games, error, isLoading, fetchNextPage,isFetchingNextPage, hasNextPage } = useGame(
    selectedGenre,
    selectedPlatform,
    sortValue,
    searchText,
    [selectedGenre, selectedPlatform, sortValue, searchText]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;

  return (
    <Box spacing={3}>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      spacing={3}
      padding={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardSkeleton key={skeleton}></CardSkeleton>
        ))}
        {games && games.pages.map((page, index) => <React.Fragment key={index}>
          {page.results.map((game) => (
        <GameCard game={game} key={game.id}></GameCard>
      ))}
        </React.Fragment>)}
    </SimpleGrid>
      {hasNextPage && <Button margin={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...': 'Load More'}</Button>}
    </Box>
    
  );
};

export default GameGrid;
 