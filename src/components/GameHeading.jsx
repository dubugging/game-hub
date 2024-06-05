import { Text } from "@chakra-ui/react";

const GameHeading = ({ platform, genre }) => {
  return (
    <Text
      textTransform="capitalize"
      fontSize="4xl"
      fontWeight="bold"
      marginBottom={3}
      marginLeft={5}
    >
      {platform ? platform.name : ""} {genre} Games
    </Text>
  );
};

export default GameHeading;
