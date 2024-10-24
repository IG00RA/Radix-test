import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #555;
`;

export const GitLink = styled.a`
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s;
  color: #555;
  &:hover {
    color: #777;
  }
`;
