import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const ContainerRow = styled.div`
  display: flex;
  @media screen and (max-width: 375px) {
    flex-direction: ${({ primary }) => (primary ? "column-reverse" : "column")};
  }
`;
export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 450px;
    text-align: center;
  }
`;
export const ContentWrap = styled.div`
  width: 370px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;
export const Title = styled.h1`
  color: hsl(212, 27%, 19%);
  font-size: 2.5rem;
  font-weight: 900;
`;
export const Textc = styled.p`
  color: hsl(232, 10%, 55%);

  font-family: "Barlow", sans-serif;
`;
export const Link = styled.a`
  margin-top: 10px;
  color: hsl(212, 27%, 19%);
  text-transform: uppercase;
  font-variant-caps: all-small-caps;
  font-weight: bold;
`;
export const TextLine = styled.div`
  position: absolute;
  width: 90px;
  height: 6px;
  border-radius: 20px;
  margin-bottom: -20px;
  bottom: 20px;
  left: -5px;
  background-color: ${({ primary }) =>
    primary ? "hsl(7, 99%, 70%)" : "hsl(51, 100%, 49%)"};
  z-index: -1;

  @media screen and (max-width: 375px) {
    left: 36.5%;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 375px) {
    margin-top: -5px;
  }
`;
export const ImageTextcontainer = styled.div`
  position: absolute;
  display: flex;
  width: 55%;
  flex-direction: column;
  text-align: center;
  color: ${({ second }) =>
    second ? "hsl(198, 62%, 26%)" : "hsl(167, 40%, 24%)"};
  top: 60%;
  left: 23%;
  @media screen and (max-width: 375px) {
    width: 90%;
    top: 65%;
    left: 5%;
  }
`;
export const ImageTitle = styled.h1`
  font-family: "Fraunces", serif;
  font-size: 2rem;
  font-weight: 900;
  @media screen and (max-width: 375px) {
    font-size: 1.75rem;
  }
`;
export const ImageText = styled.p`
  font-family: "Barlow", serif;
`;
