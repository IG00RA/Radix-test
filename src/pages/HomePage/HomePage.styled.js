// HomePage.styled.js

import styled from "styled-components";
import { Box, Card, Heading, Text, Link as RadixLink } from "@radix-ui/themes";

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CategoryCard = styled(Card)`
  display: flex;
  flex-direction: ${({ order }) =>
    order === "reverse" ? "row-reverse" : "row"};
  align-items: center;
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  background-color: var(--color-panel-solid);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const CategoryImage = styled.img`
  width: 220px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const CategoryText = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const CategoryHeading = styled(Heading)`
  color: var(--color-hi-contrast);
  font-size: 20px;
  margin: 0;
`;

export const CategoryDescription = styled(Text)`
  color: var(--color-lo-contrast);
  font-size: 16px;
`;

export const CategoryLink = styled(RadixLink)`
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: none;
  margin-top: 8px;

  &:hover {
    color: var(--color-accent-emphasis);
  }
`;
