import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

const CardSkeleton = () => {
  return (
    <CardContainer>
      <Card>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default CardSkeleton;
