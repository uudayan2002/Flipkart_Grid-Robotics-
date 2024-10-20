import React, { useRef, useState } from 'react';
import { Box, IconButton, Button } from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon

function Camera({ brightness, contrast }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Start with the video off by default

  const startVideoFeed = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsVideoPlaying(true); // Update state when video starts
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  };

  const stopVideoFeed = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach(track => track.stop()); // Stop all video tracks
      videoRef.current.srcObject = null;
      setIsVideoPlaying(false); // Update state when video stops
    }
  };

  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Optionally, you can get the captured image as a data URL
      const dataURL = canvas.toDataURL('image/png');
      console.log('Captured image: ', dataURL);
    }
  };

  const toggleVideoFeed = () => {
    if (isVideoPlaying) {
      stopVideoFeed();
    } else {
      startVideoFeed();
    }
  };

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
        filter: `brightness(${brightness}%) contrast(${contrast}%)`,
      }}
    >
      {/* Video feed element */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '70%', height: '100%' }}
      />
      
      {/* Hidden canvas for capturing video frames */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      {/* Circular Capture Frame IconButton beside the video */}
      <IconButton 
        ml={4}
        colorScheme="teal"
        aria-label="Capture frame"
        icon={<FaCamera />} // Use camera icon
        onClick={captureFrame}
        borderRadius="50%" // Make the button circular
        width="60px" // Set equal width and height
        height="60px" // Set equal width and height
        fontSize="1.5rem" // Adjust icon size
        isDisabled={!isVideoPlaying} // Disable capture button when video is off
      />

      {/* Button to toggle video feed */}
      <Button 
        ml={4}
        colorScheme={isVideoPlaying ? "red" : "green"} // Red for stop, green for start
        onClick={toggleVideoFeed}
      >
        {isVideoPlaying ? "Stop Video" : "Start Video"}
      </Button>
    </Box>
  );
}

export default Camera;
