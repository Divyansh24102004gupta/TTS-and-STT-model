import pyttsx3

# Initialize the TTS engine
engine = pyttsx3.init()

# Set properties (optional)
engine.setProperty('rate', 150)  # Speed of speech (higher means faster)
engine.setProperty('volume', 1)  # Volume (range: 0.0 to 1.0)

# Function to convert text to speech
def text_to_speech(text):
    # Pass the text to the engine and make it speak
    engine.say(text)
    engine.runAndWait()

# Example usage
if __name__ == "__main__":
    print("Enter text to convert to speech: ")
    text = input()  # Get user input text
    text_to_speech(text)
