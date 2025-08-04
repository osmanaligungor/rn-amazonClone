import { FontAwesome } from "@expo/vector-icons";

export const getRating = (rating) => {
  const ratingStar = [];

  const fullStar = <FontAwesome name="star" size={10} color="#FFAF00" />;
  const emptyStar = <FontAwesome name="star-o" size={10} color="#FFAF00" />;
  const halfStar = (
    <FontAwesome name="star-half-empty" size={10} color="#FFAF00" />
  );

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(fullStar);
    } else {
      ratingStar.push(emptyStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStar;
  }

  return ratingStar;
};
