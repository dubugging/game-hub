import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatFormIcons from "./PlatFormIcons";
import Score from "./Score";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius="7px" overflow="hidden">
      <Image
        src={game.background_image}
        height="75%"
        objectFit={"cover"}
      ></Image>
      <CardBody>
        <Heading fontSize="2xl" marginBottom={2}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIcons game={game}></PlatFormIcons>
          <Score score={game.metacritic}></Score>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
