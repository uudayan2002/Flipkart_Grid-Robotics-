# Flipkart Robotics and Object Detection WebApp

## Overview

This project is a web-based application developed for Flipkart to optimize object detection, product inspection, and inventory management. The system incorporates a camera feed, object detection models, and a gantry robot simulation (via Gazebo) to handle both non-perishable and perishable products. The application identifies objects, provides critical information such as expiry dates for non-perishables, and estimates the shelf life for perishable items like fruits and vegetables.

## Features

### 1. **Video Feed**
   - Displays a live video feed from the connected camera.
   - Provides real-time visuals of objects for detection.

### 2. **Object Detection and Gantry Robot Control**
   - Utilizes YOLOv8 for real-time object detection and quality/freshness analysis.
   - Simulates gantry robot movements using Gazebo to handle object selection.
   - Provides detailed information after object scanning:
     - **Non-perishable items**:
       - Expiry date
       - Manufacture date
       - Delivery status (safe for delivery or not)
     - **Perishable items**:
       - Estimated shelf life (time left before spoilage)

### 3. **Image Processing**
   - Offers brightness and contrast adjustments to enhance detection accuracy.
   - Ensures clarity for more precise object handling and detection.

### 4. **OCR for Text Extraction**
   - Uses PaddleOCR to extract textual information, such as expiry and manufacture dates, from product packaging.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Python, Django
- **Object Detection**:
  - YOLOv8 for detecting objects and assessing product quality/freshness.
  - PaddleOCR for extracting textual details from product packaging.
- **Gantry Robot Simulation**: Simulated with Gazebo for realistic object handling and movement.
- **Languages**: Python, JavaScript

## How It Works

1. **Object Detection**: Detects objects in the video feed using the YOLOv8 model.
2. **Gantry Robot Simulation**: Simulates the gantry robot’s movements using Gazebo to pick up objects and scan them.
3. **Product Information**: Displays detailed information, including expiry/manufacture dates for non-perishable products and shelf life for perishable products.
4. **OCR Extraction**: Extracts product details such as expiry dates using PaddleOCR.
5. **Image Processing**: Provides controls for adjusting brightness and contrast for better detection accuracy.

## Future Enhancements

- Enhance freshness detection algorithms for better accuracy in perishable product analysis.
- Refine gantry robot simulation for smoother control and interaction.
- Expand object detection to support a broader range of product categories.
