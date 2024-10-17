import React, { useState } from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
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
    <Box bg="#40513B" borderRadius="20px" border="2px solid #EDF1D6" color="#EDF1D6" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" gridRow="span 2" p={4} position="relative">
<Stack direction="row" spacing={4} mt="20px" align="center">
        <Checkbox isChecked={isPacked} onChange={handlePackedChange}>
          Packed
        </Checkbox>
        <Checkbox isChecked={isUnpacked} onChange={handleUnpackedChange}>
          UnPacked
        </Checkbox>
      </Stack>
      <Accordion defaultIndex={[0]} allowMultiple width="100%" mt="20px">
        
        <AccordionItem>
          <h2>
            <AccordionButton>
              
              <Box as="span" flex="2" textAlign="left">
               
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
