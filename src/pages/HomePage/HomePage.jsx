import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CategoryCard,
  CategoryImage,
  CategoryText,
  CategoryHeading,
  CategoryDescription,
  CategoryLink,
} from "./HomePage.styled";

import chairImage from "../../assets/chair/484238_10_800.webp";
import bedImage from "../../assets/bed/low-profile-bed_1024x1024.webp";
import cabinetImage from "../../assets/cabinet/2525.webp";
import tableImage from "../../assets/table/132.webp";
import dresserImage from "../../assets/dresser/accessorizing_dressers.webp";
import sofaImage from "../../assets/sofa/default_name.webp";

const categories = [
  {
    name: "Chairs",
    path: "/chairs",
    image: chairImage,
    description: "Comfortable and stylish chairs for every room.",
  },
  {
    name: "Beds",
    path: "/beds",
    image: bedImage,
    description: "Elegant beds to ensure your best sleep.",
  },
  {
    name: "Cabinets",
    path: "/cabinets",
    image: cabinetImage,
    description: "Stylish cabinets to store your belongings.",
  },
  {
    name: "Tables",
    path: "/tables",
    image: tableImage,
    description: "Beautiful tables for every occasion.",
  },
  {
    name: "Dressers",
    path: "/dressers",
    image: dresserImage,
    description: "Dressers to keep your room organized.",
  },
  {
    name: "Sofas",
    path: "/sofas",
    image: sofaImage,
    description: "Comfy sofas for relaxing moments.",
  },
];

const HomePage = () => {
  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryCard
          key={category.name}
          order={index % 2 === 0 ? "normal" : "reverse"}
        >
          <CategoryImage src={category.image} alt={category.name} />
          <CategoryText>
            <CategoryHeading>{category.name}</CategoryHeading>
            <CategoryDescription>{category.description}</CategoryDescription>
            <CategoryLink as={Link} to={category.path}>
              Explore {category.name}
            </CategoryLink>
          </CategoryText>
        </CategoryCard>
      ))}
    </Container>
  );
};

export default HomePage;
