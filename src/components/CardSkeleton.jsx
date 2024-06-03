import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card width={"270px"} borderRadius="7px" overflow="hidden">
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
