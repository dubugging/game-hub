import { List, ListItem } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

const GenreSkeletonList = ({ genres }) => {
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY={2}>
          <GenreSkeleton></GenreSkeleton>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreSkeletonList;
