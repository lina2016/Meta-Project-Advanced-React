import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    return (
    <VStack
      alignItems = "flex-start"
      color="black"
      w = "100%"
      backgroundColor = "white"
      borderRadius = "lg"
      boxShadow = "md"
    >
      <Image width="100%" src={imageSrc} alt={title}/>
      <Heading as="h3" size="md" alignContent="start" paddingX={5} paddingTop={5}>
        {title}
      </Heading>
      <Text paddingX={5} paddingY={5}>{description}</Text>
      <HStack justifyContent="flex-end" paddingX={5} paddingBottom={5}>
        <Text color="blackAlpha.900">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
