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
} from "./DressersPage.styled";

import img1 from "../../assets/dresser/accessorizing_dressers.webp";
import img2 from "../../assets/dresser/japandi_dressers_placed_in_a_bedroom.webp";
import img3 from "../../assets/dresser/metal_accent.webp";
import img4 from "../../assets/dresser/natural_wood_finishes_in_dresser.webp";
import Slider from "../../components/Slider/Slider";

export const DressersPage = ({ handleAddToCart }) => {
  const product = {
    name: "Minimalist Dresser",
    description:
      "Our dressers are the perfect solution for keeping your room organized and stylish. With various sizes and designs available, you can find the ideal dresser to fit your space. Each dresser is designed with functionality in mind, featuring spacious drawers for storage while enhancing your room's aesthetic. Durable and elegant, these dressers are a must-have for any bedroom.",
    price: "$359.99",
    images: [img1, img2, img3, img4],
    options: {
      size: ["Small", "Medium", "Large"],
      color: ["Black", "White", "Gray"],
    },
  };

  return (
    <MobileWrapper>
      <Slider product={product} />
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

export default DressersPage;
