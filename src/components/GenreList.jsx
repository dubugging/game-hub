import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { getOptimizeUrl } from "../services/optimizeImage";
import GenreSkeletonList from "./GenreSkeletonList";

const GenreList = ({ selectedGenre, onSelectGenre }) => {
  const { genres, isLoading, error } = useGenre();
  return (
    <>
      {error && null}
      {isLoading && <GenreSkeletonList genres={genres}></GenreSkeletonList>}

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
