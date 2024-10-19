import os

# Set paths based on your directory structure
dataset_path = "C:/Users/nathu/Desktop/flipkart_grid/project/perishable detection/dataset"

train_images_dir = os.path.join(dataset_path, "images/train")
train_labels_dir = os.path.join(dataset_path, "labels/train")

# Class labels based on directory names
classes = {
    "fresh_apple": 1,
    "fresh_banana": 3,
    "stale_apple": 0,
    "stale_banana": 2
}

# Make sure the labels directory exists
os.makedirs(train_labels_dir, exist_ok=True)

# Loop through each class folder in the train images directory
for class_folder in os.listdir(train_images_dir):
    class_path = os.path.join(train_images_dir, class_folder)
    
    if class_folder in classes:
        class_id = classes[class_folder]
        
        # Loop through all image files in the class folder
        for image_file in os.listdir(class_path):
            if image_file.endswith((".jpg", ".png")):
                # Create corresponding label file in the labels directory
                label_file = os.path.join(train_labels_dir, image_file.replace(".jpg", ".txt").replace(".png", ".txt"))
                
                with open(label_file, "w") as f:
                    # Write the annotation: the bounding box covers the entire image
                    f.write(f"{class_id} 0.5 0.5 1 1\n")

print("Label files generated successfully.")
