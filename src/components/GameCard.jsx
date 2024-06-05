import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatFormIcons from "./PlatFormIcons";
import Score from "./Score";
import { getOptimizeUrl } from "../services/optimizeImage";
import CardContainer from "./CardContainer";

const GameCard = ({ game }) => {
  return (
    <CardContainer>
      <Card>
        <Image
          src={getOptimizeUrl(game.background_image)}
          height="75%"
          objectFit={"cover"}
        ></Image>
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatFormIcons game={game}></PlatFormIcons>
            <Score score={game.metacritic}></Score>
          </HStack>
          <Heading fontSize="2xl" marginBottom={2}>
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
