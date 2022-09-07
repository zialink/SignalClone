import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ownerContainer: {
    backgroundColor: "lightgray",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    maxWidth: "70%",
    color: "black",
    marginLeft: "auto",
  },
  guestContainer: {
    backgroundColor: "#3777f0",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    maxWidth: "70%",
    color: "white",
    marginRight: "auto",
  },
  ownersText: {
    color: "black",
    fontSize: 15,
  },
  guestText: {
    color: "white",
    fontSize: 15,
  },
});

export default styles;
