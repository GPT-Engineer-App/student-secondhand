import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack spacing={4} py={4} bg="brand.600" width="100%" justifyContent="center">
      <Button as={Link} to="/" bg="brand.500" color="white">
        Home
      </Button>
      <Button as={Link} to="/previous-items" bg="brand.500" color="white">
        Previous Items
      </Button>
    </HStack>
  );
};

export default NavBar;
