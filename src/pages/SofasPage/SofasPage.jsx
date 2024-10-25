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
} from "./SofasPage.styled";

import img1 from "../../assets/sofa/default_name.webp";
import img2 from "../../assets/sofa/default_name (1).webp";
import img3 from "../../assets/sofa/default_name (2).webp";
import img4 from "../../assets/sofa/default_name (3).webp";
import img5 from "../../assets/sofa/oswald_sofa_bed_dessin_twist_lifestyle.jpg";
import Slider from "../../components/Slider/Slider";

export const SofasPage = ({ handleAddToCart }) => {
  const product = {
    name: "Minimalist Sofa",
    description:
      "Indulge in comfort with our collection of sofas, perfect for relaxing moments at home. With a range of styles, from contemporary to classic, each sofa is designed for ultimate relaxation. Made from high-quality materials, they offer both durability and style. Whether you're hosting guests or enjoying a movie night, our sofas provide the perfect spot to unwind.",
    price: "$899.99",
    images: [img1, img2, img3, img4, img5],
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

export default SofasPage;
