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
} from "./TablesPage.styled";

import img1 from "../../assets/table/132.webp";
import img2 from "../../assets/table/DALL_E_2024-01-25_15.16.40_-_A_simple_yet_striking_centerpiece_featuring_a_beautifully_crafted_vase_with_fresh_flowers_placed_on_a_minimalist_dining_table._The_vase_is_elegant_a.webp";
import img3 from "../../assets/table/DALL_E_2024-01-25_15.17.29_-_A_minimalist_dining_area_with_a_neutral_color_palette_predominantly_featuring_whites_beiges_and_greys._The_room_includes_a_sleek_modern_dining_tab.webp";
import img4 from "../../assets/table/DALL_E_2024-01-25_15.18.52_-_A_dining_table_with_smooth_polished_surfaces_contrasting_with_a_rough-textured_rug_underneath._The_table_is_sleek_and_modern_with_a_high-gloss_finis.webp";
import Slider from "../../components/Slider/Slider";

export const TablesPage = ({ handleAddToCart }) => {
  const product = {
    name: "Minimalist Table",
    description:
      "Explore our range of beautiful tables designed for every occasion. Whether you need a dining table for family gatherings or a stylish coffee table for your living room, our collection has something for everyone. Each table is crafted with attention to detail and quality, ensuring functionality while adding a touch of elegance to your space.",
    price: "$459.99",
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

export default TablesPage;
