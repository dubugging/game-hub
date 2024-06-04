import { useGame } from "../hooks/useGame";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = ({ selectedGenre, selectedPlatform, sortValue }) => {
  const { games, error, isLoading } = useGame(
    selectedGenre,
    selectedPlatform,
    sortValue,
    [selectedGenre, selectedPlatform, sortValue]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={3}
        padding={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton}></CardSkeleton>
          ))}
        {games.map((game) => (
          <GameCard game={game} key={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
