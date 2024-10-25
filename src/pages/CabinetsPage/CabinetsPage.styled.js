import styled from "styled-components";
import * as Select from "@radix-ui/react-select";

// Styled Select components
export const StyledSelectTrigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 150px;
`;

export const StyledSelectContent = styled(Select.Content)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledSelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const StyledSelectItem = styled(Select.Item)`
  padding: 8px 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }

  &[data-state="checked"] {
    background-color: #e0e0e0;
  }
`;

export const StyledSelectIcon = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #888;
`;

export const MobileWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
  }
`;

export const ProductDetails = styled.div`
  padding: 20px;
  text-align: left;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

export const ProductName = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const OptionSelector = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 40px;
  }
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #7f8f9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #a1b5c7;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 12px 24px;
  }
`;
