import styled from "styled-components";
import { Link } from "react-scroll";
import { Background, BackgroundMobil } from "../../images";

export const Container = styled.header`
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 375px) {
    background-image: url(${BackgroundMobil});
    text-align: center;
  }
`;

export const Nav = styled.nav`
  width: auto;
  display: flex;
  height: 100px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 375px) {
    padding: 0 20px;
  }
`;
export const Bars = styled.div`
  display: none;
  @media screen and (max-width: 375px) {
    margin: -38px -20px 0 0;
    display: block;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 375px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    background-color: hsl(0, 0%, 100%);
    width: 83%;
    height: 55%;
    position: absolute;
    color: hsl(210, 4%, 67%);
    margin-top: 112%;
    margin-left: 18px;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.5s ease;
    z-index: 2;
  }
`;
export const NavItems = styled.li`
  font-size: 1rem;
  margin: 0 1em;
  color: hsl(0, 0%, 100%);

  font-family: "Barlow", sans-serif;
  @media screen and (max-width: 375px) {
    color: hsl(232, 10%, 55%);
    list-style: none;
    margin: 1em;
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
`;
export const Button = styled.div`
  background-color: hsl(0, 0%, 100%);
  font-size: 0.8rem;
  padding: 0.7em 1.5em;
  color: #000;
  cursor: pointer;
  border-radius: 15px;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);

    color: hsl(0, 0%, 100%);
  }
  @media screen and (max-width: 375px) {
    background-color: hsl(51, 100%, 49%);
    text-align: center;
    width: 60px;
    margin: 1em;

    :hover {
      background-color: hsl(51, 100%, 49%);
    }
  }
`;
export const Logo = styled.img`
  width: 124px;
  height: 24px;
  @media screen and (max-width: 375px) {
    width: 100px;
    height: 20px;
  }
`;

export const Text = styled.h1`
  font-size: 3.7rem;

  color: hsl(0, 0%, 100%);
  position: absolute;
  left: 30%;
  top: 23%;
  @media screen and (max-width: 375px) {
    font-size: 2.7rem;
    font-weight: 600;
    left: -5px;
  }
`;
export const ArrowImg = styled.img`
  height: 100px;
  position: absolute;
  margin: auto;
  right: 50%;
  top: 45%;
  @media screen and (max-width: 375px) {
    right: 45%;
    top: 55%;
  }
`;

export const Triangle = styled.div`
  @media screen and (max-width: 375px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 20px solid white;
    transition: transform 0.5s ease;
    top: 15%;
    right: 7%;
  }
`;
