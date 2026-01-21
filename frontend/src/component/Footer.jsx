import { FooterWrapper, FooterText } from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        © {new Date().getFullYear()} Authify. Built by Vivek Vadher
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
