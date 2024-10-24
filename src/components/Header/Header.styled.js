import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #f5f5f5;
  color: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;
