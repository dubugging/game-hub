import { useGame } from "../hooks/useGame";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
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
