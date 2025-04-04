
import { Link as RouterLink } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #f8fafc;
    min-height: 100vh;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
  animation: ${fadeIn} 1.2s ease-out;
  border-radius: 10%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(96, 165, 250, 0.2),
    transparent 70%
  );
  z-index: 1;
`;

const Features = styled.section`
  padding: 80px 0;
`;

const FeaturesTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1.4s ease-out;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1.6s ease-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #f8fafc;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
`;

const CTAButton = styled.div`
  display: inline-block;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  color: white;
  text-decoration: none;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(96, 165, 250, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(96, 165, 250, 0.4);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 40px 0;
  color: #cbd5e1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>Faizan Talks</Logo>
          <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </Nav>
        </Header>

        <Hero>
          <HeroContent>
            <HeroTitle>Experience the Future of Conversation</HeroTitle>
            <HeroSubtitle>
              Faizan Talks is an advanced AI chat platform designed to provide
              intelligent, human-like conversations. Discover a new way to
              interact with artificial intelligence.
            </HeroSubtitle>
            <RouterLink to="/faizan-talks">
            <CTAButton>Start Chatting Now</CTAButton>
              </RouterLink>
          </HeroContent>
          <HeroImageContainer>
            <GlowEffect />
            <img
              src="https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif"
              alt="AI Chat Animation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
          </HeroImageContainer>
        </Hero>

        <Features>
          <FeaturesTitle>Why Choose Faizan Talks?</FeaturesTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureTitle>Advanced AI Technology</FeatureTitle>
              <FeatureDescription>
                Powered by state-of-the-art language models that understand
                context and provide relevant responses.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Natural Conversations</FeatureTitle>
              <FeatureDescription>
                Experience fluid, human-like interactions that make you forget
                you're talking to an AI.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>24/7 Availability</FeatureTitle>
              <FeatureDescription>
                Get answers and assistance whenever you need it, day or night,
                without waiting.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Personalized Experience</FeatureTitle>
              <FeatureDescription>
                The more you interact, the better Faizan Talks understands your
                preferences and needs.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Multi-topic Knowledge</FeatureTitle>
              <FeatureDescription>
                From science to arts, technology to history - get informed
                responses on virtually any topic.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>Secure & Private</FeatureTitle>
              <FeatureDescription>
                Your conversations are protected with advanced encryption and
                privacy-focused design.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Features>

        <Footer>
          <p>© 2025 Faizan Talks. All rights reserved.</p>
        </Footer>
      </Container>
    </>
  );
};


