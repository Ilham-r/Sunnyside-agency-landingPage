import React, { useState } from "react";
import { Arrow, hamburger,LogoS } from "../../images";
import {
  Button,
  Container,
  Logo,
  Nav,
  NavItems,
  NavMenu,
  ArrowImg,
  Text,
  Bars,
  Triangle
} from "../Hero/HeroElements";

export default function Hero() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Container>
        <Nav>
          <Logo  src={LogoS} alt="sunnyside"/>
          <Bars onClick={handleClick}>
            <img src={hamburger} alt="nav hamburger " />
          </Bars>
          <NavMenu onClick={handleClick} click={click}>
            <NavItems>About</NavItems>
            <NavItems>Services</NavItems>
            <NavItems>Projects</NavItems>
            <Button>CONTACT</Button>
          </NavMenu>
        </Nav>
        <Triangle click={click} />

        <Text> WE ARE CREATIVES</Text>
        <ArrowImg src={Arrow} alt="arrow" />
      </Container>
    </>
  );
}
