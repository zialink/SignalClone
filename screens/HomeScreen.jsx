import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { FlashList } from "@shopify/flash-list";

import chatRoomData from "../assets/dummy_data/ChatRooms";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <FlashList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        estimatedItemSize={10}
      />

      <Button
        title="Go to ChatRoom"
        onPress={() =>
          navigation.navigate("ChatRoomScreen", { name: "ChatRoom" })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
