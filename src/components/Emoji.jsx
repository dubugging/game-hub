import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";

const Emoji = ({ rating_top }) => {
  const emojiMap = {
    3: { src: meh, alt: "average" },
    4: { src: thumbsUp, alt: "good" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating_top]} boxSize="25px" marginTop={2}></Image>;
};

export default Emoji;
