import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius="7px" overflow="hidden">
      <Image
        src={game.background_image}
        height="75%"
        objectFit={"cover"}
      ></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
