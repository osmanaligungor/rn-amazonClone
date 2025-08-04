import { Image, StyleSheet, Text, View } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};
export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: 140,
    padding: 5,
    marginLeft: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000000",
  },
  image: {
    width: "100%",
    height: 130,
  },
});
