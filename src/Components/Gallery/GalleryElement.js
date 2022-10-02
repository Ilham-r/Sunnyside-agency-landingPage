import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;
export const ImagWrap = styled.div`
  width: 50%;
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-top: -5px;
  }
`;
export const Imag = styled.img`
  width: 50%;
`;
