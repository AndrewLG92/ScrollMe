import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { insertPost } from "@/utils/api/controls";
import { useAuth } from '@/utils/globalcontext'

// Type for props
interface PostModalProps {
  visible: boolean; // To control visibility
  onClose: () => void; // Function to close the modal
  title: string; // Title of the modal
  buttonText: string; // Button text to close modal
}

const PostModal: React.FC<PostModalProps> = ({ visible, onClose, title, buttonText }) => {

  const [inputText, setInputText] = useState(""); // State for text input
  const {user, loading} = useAuth();
  const handleInputChange = (text: string) => {
    setInputText(text); // Update input text state
  };

  const handlePostSubmit = async () => {
    const success = await insertPost(user?.id as string, inputText);
    if (success) {
      setInputText('');
      onClose();
      console.log("Post Created!");

    } else {
      console.log("Post creation failed.");
    }
  };

  
  const closeModalOnBackground = () => {
    // Optionally, hide the keyboard if it's open when clicking outside
    Keyboard.dismiss();
    onClose(); // Close the modal when tapping outside
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Handle back button on Android
    >
      <TouchableWithoutFeedback onPress={closeModalOnBackground}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{title}</Text>

            {/* TextInput for user input */}
            <TextInput
              style={styles.textarea}  // Adjusted style for textarea
              placeholder="Type something..."
              value={inputText}
              onChangeText={handleInputChange}
              multiline={true}          // Allow multiple lines of text
              numberOfLines={4}         // Set the initial height of the TextInput
            />

            {/* Submit button */}
            <TouchableOpacity onPress={handlePostSubmit} style={styles.button}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PostModal;

// Styles
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textarea: {
    width: "100%",
    minHeight: 100,       // Minimum height for multiline input
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    textAlignVertical: "top",  // Ensures text starts at the top of the textarea
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
