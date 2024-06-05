import React from "react";
import { Container, VStack, HStack, Text, Image, Box } from "@chakra-ui/react";

const PreviousItems = ({ items }) => {
  return (
    <Container centerContent maxW="container.md" py={8} bg="brand.400">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold" color="brand.900">
          Previously Added Items
        </Text>
        <VStack spacing={4} width="100%">
          {items.length > 0 ? (
            items.map((item, index) => (
              <HStack key={index} spacing={4} width="100%" p={4} borderWidth={1} borderRadius="md" bg="brand.500">
                <Image boxSize="100px" objectFit="cover" src={item.image} alt={item.title} />
                <VStack align="start" flex="1">
                  <Text fontSize="xl" fontWeight="bold" color="brand.900">
                    {item.title}
                  </Text>
                  <Text color="brand.900">${item.price}</Text>
                </VStack>
              </HStack>
            ))
          ) : (
            <Text color="brand.900">No items added yet.</Text>
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default PreviousItems;
