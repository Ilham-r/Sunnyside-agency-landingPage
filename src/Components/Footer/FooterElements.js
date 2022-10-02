import styled from "styled-components";
import { Link } from "react-scroll";
export const Container = styled.footer`
  margin-top: -5px;
  width: 100%;
  height: 270px;
  font-family: "Barlow";
  background-color: #90d4c5;
  display: flex;
  justify-content: center;
  align-content: center;
`;
export const Wrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  color: hsl(167, 40%, 24%);
`;
export const Logo = styled.img`
  width: 124px;
  height: 24px;
  @media screen and (max-width: 375px) {
    width: 100px;
    height: 20px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;

  justify-content: center;
  padding: 0;
`;
export const Items = styled.li`
  font-size: 1rem;
  margin: 0 1em;
  color: hsl(0, 0%, 100%);
`;
export const ItemLink = styled(Link)`
  color: hsl(168, 34%, 41%);
  cursor: pointer;
  :hover {
    color: hsl(0, 0%, 100%);
  }
`;
export const IconsWrapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;
export const Icon = styled.img`
  width: 15px;
  height: 15px;
  padding: 0 10px;
  color: #2c7566;
  cursor: pointer;
  :hover {
    fill: hsl(0, 0%, 100%);
  }
`;
