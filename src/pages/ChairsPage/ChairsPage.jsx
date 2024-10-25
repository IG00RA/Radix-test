import * as RadixSelect from "@radix-ui/react-select";
import {
  AddToCartButton,
  Description,
  MobileWrapper,
  OptionSelector,
  ProductDetails,
  ProductName,
  Price,
  ButtonWrap,
  StyledSelectTrigger,
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectViewport,
  StyledSelectIcon,
} from "./ChairsPage.styled";

import img1 from "../../assets/chair/484238_10_800.webp";
import img2 from "../../assets/chair/484238_2_800.webp";
import img3 from "../../assets/chair/484238_3_800.webp";
import img4 from "../../assets/chair/484238_4_800.webp";
import img5 from "../../assets/chair/484238_8_800.webp";
import img6 from "../../assets/chair/484238_9_800.webp";
import Slider from "../../components/Slider/Slider";

export const ProductPage = ({ handleAddToCart }) => {
  const product = {
    name: "Minimalist Chair",
    description:
      "A beautiful, minimalist chair perfect for any modern home. This chair combines comfort and elegance with a sleek, modern design. Crafted from high-quality materials, it is durable, lightweight, and easy to clean. The ergonomic design ensures maximum comfort, whether you're using it in your living room, home office, or dining area. The chair is easy to assemble and is available in multiple color and size options.",
    price: "$199.99",
    images: [img1, img2, img3, img4, img5, img6],
    options: {
      size: ["Small", "Medium", "Large"],
      color: ["Black", "White", "Gray"],
    },
  };

  return (
    <MobileWrapper>
      <Slider product={product} styleType={"split"} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <Price>{product.price}</Price>
        <ButtonWrap>
          <OptionSelector>
            <RadixSelect.Root defaultValue="Medium">
              <StyledSelectTrigger aria-label="Size">
                <RadixSelect.Value />
                <StyledSelectIcon>▼</StyledSelectIcon>
              </StyledSelectTrigger>
              <StyledSelectContent>
                <StyledSelectViewport>
                  {product.options.size.map((size, index) => (
                    <StyledSelectItem key={index} value={size}>
                      <RadixSelect.ItemText>{size}</RadixSelect.ItemText>
                    </StyledSelectItem>
                  ))}
                </StyledSelectViewport>
              </StyledSelectContent>
            </RadixSelect.Root>

            <RadixSelect.Root defaultValue="Black">
              <StyledSelectTrigger aria-label="Color">
                <RadixSelect.Value />
                <StyledSelectIcon>▼</StyledSelectIcon>
              </StyledSelectTrigger>
              <StyledSelectContent>
                <StyledSelectViewport>
                  {product.options.color.map((color, index) => (
                    <StyledSelectItem key={index} value={color}>
                      <RadixSelect.ItemText>{color}</RadixSelect.ItemText>
                    </StyledSelectItem>
                  ))}
                </StyledSelectViewport>
              </StyledSelectContent>
            </RadixSelect.Root>
          </OptionSelector>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
        </ButtonWrap>
        <Description>{product.description}</Description>
      </ProductDetails>
    </MobileWrapper>
  );
};

export default ProductPage;
