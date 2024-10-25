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
} from "./CabinetsPage.styled";

import img1 from "../../assets/cabinet/2525.webp";
import img2 from "../../assets/cabinet/minimalist-kitchens-1.jpg.webp";
import img3 from "../../assets/cabinet/minimalist-kitchens-2.jpg.webp";
import img4 from "../../assets/cabinet/minimalist-kitchens-3.jpg.webp";
import img5 from "../../assets/cabinet/minimalist-kitchens.jpg.webp";
import Slider from "../../components/Slider/Slider";

export const CabinetsPage = ({ handleAddToCart }) => {
  const product = {
    name: "Minimalist Cabinet",
    description:
      "Our stylish cabinets provide both storage and aesthetic appeal. Crafted with care, these cabinets come in various styles, from sleek modern designs to classic vintage looks. They offer ample storage space for your belongings, keeping your home organized while enhancing your interior decor. Ideal for living rooms, bedrooms, or home offices.",
    price: "$499.99",
    images: [img1, img2, img3, img4, img5],
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

export default CabinetsPage;
