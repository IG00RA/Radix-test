import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;

  .menu-container {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    font-size: 20px;
  }

  @media (max-width: 425px) {
    padding: 10px 15px;
    font-size: 18px;

    .menu-container {
      display: flex;
      align-items: center;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 5px;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    display: none;
  }
  @media (min-width: 760px) {
    gap: 10px;
  }
  @media (min-width: 1024px) {
    gap: 13px;
  }
  .nav-link {
    font-size: 10px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 4px 4px;
    border-radius: 8px;
    transition: color 0.3s ease, background-color 0.3s ease;
    @media (min-width: 425px) {
      font-size: 12px;
    }
    @media (min-width: 760px) {
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
    &:hover {
      background-color: #eaeaea;
    }

    &.active {
      color: var(--color-accent);
      background-color: #f0f8ff;
    }
  }
`;

export const MobileMenuStyled = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #7f8f9e;
  color: #fff;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
`;
