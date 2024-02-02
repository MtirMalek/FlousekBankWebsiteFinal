#! pip install keras-facenet
from keras_facenet import FaceNet
embedder = FaceNet()
def get_embedding(face_img):
  face_img = face_img.astype('float32')
  face_img = np.expand_dims(face_img , axis=0)
  yhat = embedder.embeddings(face_img)
  return yhat[0]
import cv2
def load_and_preprocess_image(image_path):
    # Load the image
    img = cv2.imread(image_path)


    # Check if the image is loaded successfully
    if img is None:
        raise ValueError(f"Image at {image_path} could not be loaded")


    # Convert BGR image to RGB (FaceNet model expects RGB)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)


    # Resize the image to the required size by FaceNet
    img_resized = cv2.resize(img_rgb, (160, 160))


    return img_resized
embeddings = []
import numpy as np


img = load_and_preprocess_image("/content/image9.jpg")
embedding = get_embedding(img)
embeddings.append(embedding)
def recognize_user(input_image_path, reference_embedding):
    # Load and preprocess the input image
    input_img = load_and_preprocess_image(input_image_path)


    # Obtain the embedding for the input image
    input_embedding = get_embedding(input_img)


    # Calculate the similarity between the embeddings (cosine similarity)
    similarity_score = np.dot(input_embedding, reference_embedding) / (np.linalg.norm(input_embedding) * np.linalg.norm(reference_embedding))


    # Set a threshold to determine if it's a match or not
    threshold = 0.4  # Adjust based on your requirements


    if similarity_score > threshold:
        return True
    else:
        return False








# Assume you have a reference embedding stored somewhere
reference_embedding = embeddings[0]


# Example usage
input_image_path = "/content/Bill_Gates_-_2023_-_P062021-967902_(cropped).jpg"  # Replace with another image path
is_user_recognized = recognize_user(input_image_path, reference_embedding)


if is_user_recognized:
    print("User recognized. Allow access.")
else:
    print("User not recognized. Deny access.")