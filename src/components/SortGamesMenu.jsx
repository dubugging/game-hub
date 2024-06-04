import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortGamesMenu = ({ selectedSortValue, handleSelectedSortValue }) => {
  const sortSelector = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortSelector.find(
    (order) => order.value === selectedSortValue
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortSelector.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            onClick={() => handleSelectedSortValue(value)}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGamesMenu;
