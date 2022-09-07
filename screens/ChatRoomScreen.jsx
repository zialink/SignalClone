import { StyleSheet, View, Text } from "react-native";

export default function ChatRoomScreen({ navigation, route }) {
  return (
    <View style={styles.page}>
      <Text>{route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
