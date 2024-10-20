import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Stack,
} from '@chakra-ui/react';

function Prod_details() {
  const [isPacked, setIsPacked] = useState(false);
  const [isUnpacked, setIsUnpacked] = useState(false);

  const handlePackedChange = () => {
    setIsPacked(!isPacked);
    if (isUnpacked) setIsUnpacked(false);
  };

  const handleUnpackedChange = () => {
    setIsUnpacked(!isUnpacked);
    if (isPacked) setIsPacked(false);
  };

  return (
    <Box
      bg="#40513B"
      borderRadius="20px"
      border="2px solid #EDF1D6"
      color="#EDF1D6"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      gridRow="span 2"
      p={4}
      position="relative"
    >
      <Stack direction="row" spacing={4} mt="20px" align="center">
        {/* Checkboxes for Packed and Unpacked can be re-added here if needed */}
      </Stack>

      <Accordion width="100%" mt="20px">
      <AccordionItem>
          <h2>
            <AccordionButton as="div" display="flex" alignItems="center">
              <Box as="span" flex="1" textAlign="left">
              <Text fontSize="xl" as="b">Item 1</Text>
              </Box>
              {/* Button to toggle accordion */}
              <Button
                colorScheme="teal"
                size="sm"
                onClick={(e) => e.target.closest('.chakra-accordion-item').click()}
                mr={2}
              >
                Toggle
              </Button>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton as="div" display="flex" alignItems="center">
              <Box as="span" flex="1" textAlign="left">
              <Text fontSize="xl" as="b">Item 2</Text>
              </Box>
              {/* Button to toggle accordion */}
              <Button
                colorScheme="teal"
                size="sm"
                onClick={(e) => e.target.closest('.chakra-accordion-item').click()}
                mr={2}
              >
                Toggle
              </Button>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton as="div" display="flex" alignItems="center">
              <Box as="span" flex="1" textAlign="left">
              <Text fontSize="xl" as="b">Item 3</Text>
              </Box>
              {/* Button to toggle accordion */}
              <Button
                colorScheme="teal"
                size="sm"
                onClick={(e) => e.target.closest('.chakra-accordion-item').click()}
                mr={2}
              >
                Toggle
              </Button>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Prod_details;
