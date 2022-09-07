import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Messages from "../components/Messages";
import { FlashList } from "@shopify/flash-list";

import chatsData from "../assets/dummy_data/Chats";

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#3777f0"
        translucent={true}
      />
      <FlashList
        data={chatsData.messages}
        renderItem={({ item }) => <Messages message={item} />}
        estimatedItemSize={10}
      />
      {/* <Messages message={chatsData.messages[0]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
