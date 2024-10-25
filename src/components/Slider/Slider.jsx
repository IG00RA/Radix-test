import { ProductImageSlider, SliderImage } from "./Slider.styled";

export const Slider = ({ product, styleType = "default" }) => {
  const styles = {
    default: {
      display: "flex",
      overflowX: "scroll",
      overflowY: "hidden",
      width: "100%",
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr",
      overflowY: "auto",
      overflowX: "hidden",
      height: "600px",
      width: "375px",
    },
  };

  return (
    <ProductImageSlider style={styles[styleType]}>
      {product.images.map((image, index) => (
        <SliderImage
          key={index}
          src={image}
          alt={`Product Image ${index + 1}`}
        />
      ))}
    </ProductImageSlider>
  );
};

export default Slider;
