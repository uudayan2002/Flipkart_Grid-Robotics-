import React from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, VStack, Text } from '@chakra-ui/react';

function Extra_details({ setBrightness, setContrast, brightness, contrast }) {
  return (
    <Box
      bg="#40513B"
      borderRadius="20px"
      border="2px solid #EDF1D6"
      color="#EDF1D6"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gridRow="span 2"
    >
      <Text mb={4}>Light Adjustment</Text>

      <VStack spacing={4} w="80%">
        <Text>Brightness: {brightness}%</Text>
        <Slider
          value={brightness}
          min={50}
          max={150}
          onChange={(val) => setBrightness(val)}
          aria-label="Brightness adjustment"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Text>Contrast: {contrast}%</Text>
        <Slider
          value={contrast}
          min={50}
          max={150}
          onChange={(val) => setContrast(val)}
          aria-label="Contrast adjustment"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>
    </Box>
  );
}

export default Extra_details;

