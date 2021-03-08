import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  backTouchable: {
    position: "absolute",
    top: Platform.OS === "ios" ? 20 : 50,
    left: 25,
  },
  back: {
    flex: 1,
    resizeMode: "contain",
  },
});

export default styles;
