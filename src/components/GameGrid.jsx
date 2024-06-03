import { useGame } from "../hooks/useGame";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard game={game} key={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
