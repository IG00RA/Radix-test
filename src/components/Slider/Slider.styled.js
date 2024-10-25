import styled from "styled-components";

export const ProductImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 16px;
  padding-bottom: 10px;
  width: 100%;
  margin: 0 auto;

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

  max-width: 900px;
`;

export const SliderImage = styled.img`
  width: 100%;
  flex-shrink: 0;
  height: auto;
  max-height: 400px;
  margin-right: 10px;
`;
