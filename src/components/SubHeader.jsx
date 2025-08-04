import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <LinearGradient
      colors={["#a6e6eaff", "#aaece2ff", "#c1fbedff"]}
      style={styles.container}
    >
      <Feather name="map-pin" size={16} color="black" />
      <Text style={styles.delivery}>Delivery to Turkey - 32100</Text>
      <SimpleLineIcons name="arrow-down" size={12} color="black" />
    </LinearGradient>
  );
};
export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  delivery: {
    fontSize: 13,
    color: "#2c4341",
  },
});
