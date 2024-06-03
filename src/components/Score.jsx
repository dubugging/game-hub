import { Badge } from "@chakra-ui/react";

const Score = ({ score }) => {
  if (score >= 80)
    return (
      <Badge colorScheme="green" paddingX={2} borderRadius={5}>
        {score}
      </Badge>
    );
  return (
    <Badge colorScheme="yellow" paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default Score;
