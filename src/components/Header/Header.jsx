import { NavLink } from "react-router-dom";
import {
  Badge,
  CartIcon,
  HeaderStyled,
  MobileMenuStyled,
  NavContainer,
} from "./Header.styled";
import MobileMenu from "../MobileMenu/MobileMenu";

export const Header = ({ cartCount }) => {
  return (
    <HeaderStyled>
      <MobileMenuStyled>
        <MobileMenu />
      </MobileMenuStyled>
      <div>Furniture Store</div>

      <NavContainer>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/chairs" className="nav-link">
          Chairs
        </NavLink>
        <NavLink to="/beds" className="nav-link">
          Beds
        </NavLink>
        <NavLink to="/cabinets" className="nav-link">
          Cabinets
        </NavLink>
        <NavLink to="/tables" className="nav-link">
          Tables
        </NavLink>
        <NavLink to="/dressers" className="nav-link">
          Dressers
        </NavLink>
        <NavLink to="/sofas" className="nav-link">
          Sofas
        </NavLink>
      </NavContainer>

      <CartIcon>
        <svg width="35" height="30">
          <use href="#icon-basket"></use>
        </svg>
        {cartCount > 0 && <Badge>{cartCount}</Badge>}
      </CartIcon>
    </HeaderStyled>
  );
};

export default Header;
