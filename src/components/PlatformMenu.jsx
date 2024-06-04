import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";

const PlatformMenu = ({ selectedPlatform, handlePlatformSelect }) => {
  const { platforms, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? (
          <Text>{selectedPlatform.name}</Text>
        ) : (
          <Text>Platform</Text>
        )}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id}
            onClick={() => handlePlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
