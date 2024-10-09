import React from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

function Prod_details() {
  return (
    <Box bg="#40513B" borderRadius="20px" border="2px solid #EDF1D6" color="#EDF1D6" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" gridRow="span 2" p={4} position="relative">

      <Accordion defaultIndex={[0]} allowMultiple width="100%" mt="80px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="2" textAlign="left">
                <Box position="relative" top="5px" left="300px" width="50px" height="50px" opacity={1} display="flex" alignItems="center" justifyContent="center" border="2px solid #EDF1D6" borderRadius="10px" color="#EDF1D6" fontSize="20px" fontWeight="bold" bg="#40513B">
                  A
                </Box>
                <Text fontSize='xl' as='b'>Maggi 70g</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
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
