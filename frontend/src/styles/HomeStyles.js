import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`;

export const HeroSection = styled.div`
  max-width: 900px;
  text-align: center;
`;

export const HeroText = styled.div``;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #222;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  .primary-btn {
    background: #4f46e5;
    color: white;
    padding: 12px 22px;
    border-radius: 8px;
    text-decoration: none;
  }

  .secondary-btn {
    border: 2px solid #4f46e5;
    color: #4f46e5;
    padding: 12px 22px;
    border-radius: 8px;
    text-decoration: none;
  }
`;
