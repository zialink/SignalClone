import { Text, View } from "react-native";
import styles from "./styles";

const myId = "u1";

function Messages({ message }) {
  const ownersChat = message.user.id === myId;
  //const ownersChat = true;
  return (
    <View style={ownersChat ? styles.ownerContainer : styles.guestContainer}>
      <Text style={ownersChat ? styles.ownersText : styles.guestText}>
        {message.content}
      </Text>
    </View>
  );
}

export default Messages;
