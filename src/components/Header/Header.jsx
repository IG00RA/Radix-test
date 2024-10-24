import { Badge, CartIcon, HeaderStyled } from "./Header.styled";

export const Header = ({ cartCount }) => {
  return (
    <HeaderStyled>
      <div>Chair Store</div>
      <CartIcon>
        <span>
          <svg width="35" height="30">
            <use href="#icon-basket"></use>
          </svg>
        </span>
        {cartCount > 0 && <Badge>{cartCount}</Badge>}
      </CartIcon>
    </HeaderStyled>
  );
};

export default Header;
