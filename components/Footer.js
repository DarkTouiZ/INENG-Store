import styled from "styled-components";
import Center from "./Center";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />



const FooterBG = styled.div`
  background-color: #000;
  color: #fff;
  padding: 40px 0;
  margin: 40px 0 0 0;
`;

const FooterContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const FooterTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;

  p {
    margin: 0;

  }
`;

const FooterTopics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for the topics */
  gap: 20px;
  text-align: center;
`;

const FooterTopic = styled.div`
  /* Add styling for each topic if needed */
  margin: bottom 20px;

  p {
    margin: 0;
  }
`;

const FooterSubtopics = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;
`;

const FooterSubtopic = styled.div`
  /* Add styling for each subtopic if needed */
  p {
    margin: 0;
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  i {
    font-size: 24px;
    margin: 0 10px;
    color: #fff;
  }
`;

export default function Footer() {
  return (
    <FooterBG>
      <Center>
        <FooterContainer>
          <FooterTitle>
            <h2>MATERIAL SPORTLIGHT</h2>
            <h2>Pure Comfort in Cotton <br/>A Symphony of Sensation</h2>
          </FooterTitle>
        </FooterContainer>
        <FooterTopics>
          <FooterTopic>
            <FooterSubtopics>
              <h3>Shop</h3>
              <FooterSubtopic>
                <p>Men</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Women</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Home</p>
              </FooterSubtopic>
            </FooterSubtopics>
          </FooterTopic>
          <FooterTopic>
            
            <FooterSubtopics>
            <h3>Collection</h3>
              <FooterSubtopic>
                <p>Formal</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>iNeng2023</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Limited</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Soldier</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Sport</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Anime</p>
              </FooterSubtopic>
            </FooterSubtopics>
          </FooterTopic>
          <FooterTopic>
            
            <FooterSubtopics>
            <h3>Help</h3>
              <FooterSubtopic>
                <p>Customer Services</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Contact Us</p>
              </FooterSubtopic>
            </FooterSubtopics>
          </FooterTopic>
          <FooterTopic>
            
            <FooterSubtopics>
            <h3>About Us</h3>
              <FooterSubtopic>
                <p>iNeng Lab</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>CPE</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>KMUTT</p>
              </FooterSubtopic>
              <FooterSubtopic>
                <p>Our Team</p>
              </FooterSubtopic>
            </FooterSubtopics>
          </FooterTopic>
        </FooterTopics>
        <FooterText>
          I-NENG's business concept is to offer fashion and quality at the best price in a sustainable way. I-NENG has since it was founded in 2023 grown into one of the world's leading fashion companies. The content of this site is copyright-protected and is the property of I-NENG.
        </FooterText>
        <SocialIcons>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </SocialIcons>
      </Center>
    </FooterBG>
  );
}
