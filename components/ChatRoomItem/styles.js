import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  text: {
    color: "gray",
  },
  chatText: {
    color: "gray",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    position: "relative",
  },
  badgeCounter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    top: 1,
    left: 55,
    backgroundColor: "#3893cf",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  rightArea: {
    justifyContent: "center",
    flex: 1,
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  name: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default styles;
