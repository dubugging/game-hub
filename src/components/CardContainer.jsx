import { Box } from "@chakra-ui/react";

const CardContainer = ({ children }) => {
  return (
    <Box borderRadius="7px" overflow="hidden">
      {children}
    </Box>
  );
};

export default CardContainer;
