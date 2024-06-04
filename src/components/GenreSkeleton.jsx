import { ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem marginY={2}>
      <Skeleton height="40px" width="100%" borderRadius="7px"></Skeleton>
    </ListItem>
  );
};

export default GenreSkeleton;
