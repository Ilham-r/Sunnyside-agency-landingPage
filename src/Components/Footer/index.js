import {
  Container,
  IconsWrapp,
  Items,
  ItemLink,
  Menu,
  Wrapper,
  Icon,
  Logo
} from "./FooterElements";
import { LogoS, facebook, instagram, pinterest, twitter } from "../../images";

export default function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={LogoS} alt="sunnyside" />
          <Menu>
            <Items>
              <ItemLink to="/">About</ItemLink>
            </Items>
            <Items>
              <ItemLink to="#">Services</ItemLink>
            </Items>
            <Items>
              <ItemLink to="#">Projects</ItemLink>
            </Items>
          </Menu>
          <IconsWrapp>
            <Icon src={facebook} alt="Facebook " />
            <Icon src={instagram} alt="Instagram " />
            <Icon src={pinterest} alt="Pinterest " />
            <Icon src={twitter} alt="twitter" />
          </IconsWrapp>
        </Wrapper>
      </Container>
    </>
  );
}
