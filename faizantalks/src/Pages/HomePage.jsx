import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

// Container for the entire section
const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
  /* background: linear-gradient(135deg, #ffffff, #f0f4f8); */
  /* background: linear-gradient(to bottom, #83b8c8, #a0cad8); */
  border-radius: 15px;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  gap: 60px;
  transition: all 0.3s ease-in-out;
  height: 80vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

// Left section style
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  transition: transform 0.3s ease;
`;

// Heading style
const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: left;
  margin: 0;
  padding: 0;
  transition: color 0.3s ease-in-out;

  span {
    color: #37b1cd; /* Blue color for "Faizan Talks" */
  }
`;

// Description style
const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 500px;
  margin: 0;
  padding: 0;
  transition: color 0.3s ease;
  text-align: left;
  &:hover {
    color: #555;
  }
`;

// Button style
const TryButton = styled.button`
  padding: 15px 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.6);
  }
`;

// Right section style
const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Image style
const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */

  &:hover {
    transform: scale(1.02);
  }
`;

export default function HomePage() {
  return (
    <SectionContainer>
      {/* Left Section */}
      <LeftSection>
        <Heading>
          Welcome to <br />
          <span>Faizan Talks</span>
        </Heading>
        <Description>
          Faizan Talks is your AI-powered companion for all your informational
          needs. Get quick, reliable answers and explore new topics with just a
          few clicks. Let’s start the conversation!
        </Description>
        <RouterLink to="/faizan-talks">
          <TryButton>Try Now</TryButton>
        </RouterLink>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <Image
          src="https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif"
          alt="AI Assistant"
        />
      </RightSection>
    </SectionContainer>
  );
}
