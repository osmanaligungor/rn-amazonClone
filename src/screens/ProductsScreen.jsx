import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductData } from "../data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helpers";

const ProductsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price and other details may very based on product aside and color
      </Text>

      {ProductData.map((item) => (
        <View key={item.id} style={styles.productSection}>
          <View style={styles.productImageSection}>
            <Image source={item.image} style={styles.productImage} />
          </View>

          <View style={styles.productDetailSection}>
            <Text style={styles.sponsored}>Sponsored</Text>
            <Text style={styles.productName}>{item.productName}</Text>

            <View style={styles.row}>
              <Text style={styles.rating}>{item.rating}</Text>
              {getRating(item.rating)}
              <Text style={styles.ratingCount}>{item.ratingCount}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.crossOutText}>{item.crossOutText}</Text>
            </View>

            <Text style={styles.cashBack}>
              Up to 5% cahback with Amazon Pay Credit Card
            </Text>

            <Image source={PrimeLogo} style={styles.primeLogo} />

            <Text style={styles.cashBack}>
              FREE Delivery By {item.deliveryBy}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000",
  },
  tagLine: {
    fontSize: 12,
    color: "gray",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 12,
    borderRadius: 5,
  },
  productImageSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: "#000000",
  },
  productName: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 17,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: "#017185",
    marginRight: 3,
  },
  ratingCount: {
    fontSize: 10,
    color: "#017185",
    marginLeft: 3,
  },
  price: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000000",
    marginRight: 5,
  },
  crossOutText: {
    fontSize: 10,
    color: "gray",
  },
  cashBack: {
    fontSize: 10,
    marginVertical: 3,
  },
  primeLogo: {
    width: 44,
    height: 16,
    marginVertical: 3,
  },
});
