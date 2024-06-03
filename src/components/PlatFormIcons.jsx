import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";

const PlatFormIcons = ({ game }) => {
  const iconMap = {
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack>
      {game.parent_platforms.map(({ platform }) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatFormIcons;
