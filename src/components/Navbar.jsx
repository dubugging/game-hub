import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} width={50} alt="Dan Abramov" />
      <HStack>
        <Text>Dark Mode</Text>
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
