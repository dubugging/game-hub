import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { getOptimizeUrl } from "../services/optimizeImage";

const GenreList = ({ selectedGenre, onSelectGenre }) => {
  const { genres } = useGenre();
  return (
    <>
      <Heading fontSize="2xl" as="h1" marginBottom={3}>
        Genres
      </Heading>
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
              <Button
                fontWeight={genre.slug === selectedGenre ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre.slug)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
