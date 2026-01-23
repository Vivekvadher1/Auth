import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 80vh;
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: auto;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const FeatureCard = styled.div`
  background: #f1f2f3;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }

  p {
    color: #666;
    margin-top: 0.6rem;
  }
`;
