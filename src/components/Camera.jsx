import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

function Camera({ brightness, contrast }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  }, []);

  return (
    <Box
      bg="#40513B"
      border="2px solid #EDF1D6"
      color="#EDF1D6"
      borderRadius="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      style={{
        filter: `brightness(${brightness}%) contrast(${contrast}%)`
      }}
    >
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        style={{ width: '100%', height: '100%' }} 
      />
    </Box>
  );
}

export default Camera;
