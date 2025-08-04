import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecommendedProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>

      <Image style={styles.image} source={RecommendedProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealButton}>
            <Text style={styles.offDealText}>%18 off</Text>
          </TouchableOpacity>

          <Text style={styles.offDeal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,4999 ₺</Text>
          <Text style={styles.actualPrice}>1,8999 ₺</Text>
        </View>

        <Text style={styles.productName}>
          Nykaa Face Wash Gentle cleaner, moisturizing, refresing, soothing,
          hydrating.
        </Text>

        <TouchableOpacity>
          <Text style={styles.allDeal}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Deals;

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000000",
  },
  image: {
    width: "100%",
    height: 250,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealButton: {
    backgroundColor: "#be0201",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offDealText: {
    fontSize: 12,
    color: "#ffffff",
  },
  offDeal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 12,
  },
  discountPrice: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 12,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  productName: {
    fontSize: 14,
    color: "#000000",
  },
  allDeal: {
    fontSize: 14,
    color: "#017185",
    marginVertical: 10,
  },
});
