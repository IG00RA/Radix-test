import styled from "styled-components";

export const ProductImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #7a7a7a;
  }

  scrollbar-width: thin;
  scrollbar-color: #bdbdbd transparent;
`;

export const SliderImage = styled.img`
  width: 100%;
  margin-right: 10px;
`;
