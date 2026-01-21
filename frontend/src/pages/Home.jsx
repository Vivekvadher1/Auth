import { Link } from "react-router-dom";
import {
  HomeWrapper,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
} from "../styles/HomeStyles";

function Home() {
  return (
    <HomeWrapper>
      <HeroSection>
        <HeroText>
          <HeroTitle>Welcome to Authify </HeroTitle>
          <HeroSubtitle>
            A modern authentication system built with React, Node.js, and JWT.
            Secure login, register, and profile management — production ready.
          </HeroSubtitle>

          <HeroButtons>
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>
            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </HeroButtons>
        </HeroText>
      </HeroSection>
    </HomeWrapper>
  );
}

export default Home;
