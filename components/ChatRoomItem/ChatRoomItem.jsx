import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom: { users, lastMessage } }) {
  const user = users[1];
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.img} />
      {user.newMessages && (
        <View style={styles.badgeCounter}>
          <Text style={styles.badgeText}>{user.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightArea}>
        <View style={styles.topText}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{lastMessage.createdAt}</Text>
        </View>
        <View style={styles.chatText}>
          <Text numberOfLines={1} style={styles.text}>
            {lastMessage.content}
          </Text>
        </View>
      </View>
    </View>
  );
}
