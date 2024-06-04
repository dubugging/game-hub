import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { getOptimizeUrl } from "../services/optimizeImage";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                boxSize="40px"
                objectFit="cover"
                borderRadius="7px"
                src={getOptimizeUrl(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
