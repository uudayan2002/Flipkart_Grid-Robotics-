import React, { useState } from 'react';
import Camera from './components/Camera.jsx';
import Prod_details from './components/Prod_details.jsx';
import Extra_details from './components/Extra_details.jsx';
import { Grid, Box } from '@chakra-ui/react';

function App() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const videoStreamUrl = 'http://192.168.29.148:4747/video';

  return (
    <Box bg="#609966" h="100vh">
      <Grid
        templateColumns="2fr 1fr"
        templateRows="2fr 1fr"
        gap={4}
        h="100vh"
        p={10}
        pt={100}
      >
        <Camera videoStreamUrl={videoStreamUrl} brightness={brightness} contrast={contrast} />
        <Prod_details />
        <Extra_details
          setBrightness={setBrightness}
          setContrast={setContrast}
          brightness={brightness}
          contrast={contrast}
        />
      </Grid>
    </Box>
  );
}

export default App;
