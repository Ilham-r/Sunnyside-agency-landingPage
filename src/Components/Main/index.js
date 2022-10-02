import React from "react";
import {
  Container,
  ContainerRow,
  ContentContainer,
  ContentWrap,
  ImageContainer,
  Img,
  Link,
  Textc,
  Title,
  TextLine,
  ImageTitle,
  ImageText,
  ImageTextcontainer
} from "./MainElements";
import { Img1, Img2, Img3, Img4, MobileGD, MobilePH } from "../../images";

export default function Main() {
  return (
    <>
      <Container>
        <ContainerRow primary>
          <ContentContainer>
            <ContentWrap>
              <Title>Transform your brand</Title>
              <Textc>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </Textc>
              <TextLine />
              <Link>Learn more</Link>
            </ContentWrap>
          </ContentContainer>
          <ImageContainer>
            <Img src={Img1} alt="egg" />
          </ImageContainer>
        </ContainerRow>
        <ContainerRow>
          <ImageContainer>
            <Img src={Img2} alt="pink cup " />
          </ImageContainer>
          <ContentContainer>
            <ContentWrap>
              <Title>Stand out to the right audience </Title>
              <Textc>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </Textc>
              <TextLine primary />
              <Link>Learn more</Link>
            </ContentWrap>
          </ContentContainer>
        </ContainerRow>
        <ContainerRow>
          <ImageContainer>
            <ImageTextcontainer>
              <ImageTitle>Graphic Design</ImageTitle>
              <ImageText>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention
              </ImageText>
            </ImageTextcontainer>
            <Img
              src={Img4}
              alt="cherry"
              srcSet={` ${MobileGD} 375w,${Img4} 2000w,`}
            />
          </ImageContainer>
          <ImageContainer>
            <ImageTextcontainer second>
              <ImageTitle>Photography</ImageTitle>
              <ImageText>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image
              </ImageText>
            </ImageTextcontainer>
            <Img
              src={Img3}
              alt="orange"
              srcSet={`${MobilePH} 375w,${Img3} 2000w,`}
            />
          </ImageContainer>
        </ContainerRow>
      </Container>
    </>
  );
}
