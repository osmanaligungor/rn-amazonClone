import { Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
      {CarouselData.map((item, key) => (
        <Image key={key} source={item.image} style={styles.imageStyle} />
      ))}
    </Swiper>
  );
};
export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },

  imageStyle: {
    width: "100%",
    height: 250,
  },
});
