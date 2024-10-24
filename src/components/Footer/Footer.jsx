import { FooterStyled, GitLink } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2024 Chair Store. All rights reserved.</p>
      <GitLink
        href="https://github.com/IG00RA"
        target="_blank"
        rel="noopener noreferrer"
      >
        By Igoora
      </GitLink>
    </FooterStyled>
  );
};

export default Footer;
