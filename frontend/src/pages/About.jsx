import {
  AboutWrapper,
  AboutTitle,
  AboutText,
  FeatureGrid,
  FeatureCard,
} from "../styles/AboutStyles";

function About(){
  return (
    <AboutWrapper>
      <AboutTitle>About This Project</AboutTitle>

      <AboutText>
        This project demonstrates a full-stack authentication system with
        secure login, JWT-based sessions, and protected routes. It is designed
        as a production-ready boilerplate for modern web apps.
      </AboutText>

      <FeatureGrid>
        <FeatureCard>
          🔐 JWT Authentication  
          <p>Secure token-based login system</p>
        </FeatureCard>

        <FeatureCard>
          🧠 Password Hashing  
          <p>Passwords stored using bcrypt</p>
        </FeatureCard>

        <FeatureCard>
          🚀 React + Vite  
          <p>Fast frontend performance</p>
        </FeatureCard>

        <FeatureCard>
          🛡 Protected Routes  
          <p>Profile access only for logged-in users</p>
        </FeatureCard>
      </FeatureGrid>
    </AboutWrapper>
  );
};

export default About;
