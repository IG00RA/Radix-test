import { ProductImageSlider, SliderImage } from "./Slider.styled";

export const Slider = ({ product }) => {
  return (
    <ProductImageSlider>
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
