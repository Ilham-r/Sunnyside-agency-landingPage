import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-variant-caps: all-small-caps;
  font-weight: 600;
  color: hsl(210, 4%, 67%);
  margin-top: 0;
  margin-bottom: 50px;
  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`;
export const TestContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const TestWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
`;
export const TestImg = styled.img`
  width: 70px;
  border-radius: 50%;
  margin-bottom: 40px;
`;
export const FeedbackWrap = styled.div`
  width: 100%;
  height: 120px;
`;
export const Feedback = styled.p`
  color: hsl(213, 9%, 39%);
  font-family: "Barlow", sans-serif;
  line-height: 1.7;
  font-weight: 600;
`;
export const TestClient = styled.h3`
  color: hsl(212, 27%, 19%);
  font-weight: 700;
`;
export const TestClientJob = styled.p`
  color: hsl(210, 4%, 67%);
  font-family: "Barlow", sans-serif;
  margin-top: -20px;
`;
