import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatFormIcons from "./PlatFormIcons";

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
        <PlatFormIcons game={game}></PlatFormIcons>
      </CardBody>
    </Card>
  );
};

export default GameCard;
