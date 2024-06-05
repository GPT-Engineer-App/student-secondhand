import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, Image, IconButton, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", price: "", image: "" });
  const toast = useToast();

  const addItem = () => {
    if (newItem.title && newItem.price && newItem.image) {
      setItems([...items, newItem]);
      setNewItem({ title: "", price: "", image: "" });
      toast({
        title: "Item added.",
        description: "Your item has been added to the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    toast({
      title: "Item removed.",
      description: "Your item has been removed from the list.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg="brand.400">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold" color="brand.900">
          UniBiz
        </Text>
        <HStack spacing={2} width="100%">
          <Input placeholder="Item Title" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} bg="brand.500" />
          <Input placeholder="Price" type="number" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} bg="brand.500" />
          <Input placeholder="Image URL" value={newItem.image} onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} bg="brand.500" />
          <IconButton aria-label="Add Item" icon={<FaPlus />} onClick={addItem} bg="brand.600" color="white" />
        </HStack>
        <VStack spacing={4} width="100%">
          {items.map((item, index) => (
            <HStack key={index} spacing={4} width="100%" p={4} borderWidth={1} borderRadius="md" bg="brand.500">
              <Image boxSize="100px" objectFit="cover" src={item.image} alt={item.title} />
              <VStack align="start" flex="1">
                <Text fontSize="xl" fontWeight="bold" color="brand.900">
                  {item.title}
                </Text>
                <Text color="brand.900">${item.price}</Text>
              </VStack>
              <IconButton aria-label="Remove Item" icon={<FaTrash />} onClick={() => removeItem(index)} bg="brand.600" color="white" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
