import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/router";

const { HOMESCREEN, PRODUCTSSCREEN } = SCREENS;

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {Category.map((item, key) => (
        <TouchableOpacity
          key={key}
          style={styles.category}
          onPress={() => navigation.navigate(PRODUCTSSCREEN)}
        >
          <Image source={item.image} style={styles.imageStyle} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: "#2c4341",
  },
});
