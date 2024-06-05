import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const Navbar = ({ onSearch }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding="10px" marginBottom={3}>
      <Image src={logo} width={50} alt="Dan Abramov" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <HStack>
        <Text whiteSpace="nowrap">Dark Mode</Text>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        />
      </HStack>
    </HStack>
  );
};

export default Navbar;
