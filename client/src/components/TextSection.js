import styled from "styled-components";

export default function TextSection() {
  return (
    <div className="font-link" style={{margin:'auto'}}>
    <Wrapper>
        <Title>A-STAR Investment</Title>
        <Description>
        Helping you grow your business
        </Description>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 700px;
  display: grid;
  gap: 20px;
  text-align: left;
  margin: 0 auto;
  padding: 140px 20px 100px;
  margin-left: 20px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 90px;
`;

const Description = styled.p`
  max-width: 700px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 130%;
  margin: 0 left;
`;
