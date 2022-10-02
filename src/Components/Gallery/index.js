import React from "react";
import { Container, Imag, ImagWrap } from "./GalleryElement";
import {
  Cone,
  Orange,
  Milkbottles,
  Sugercubes,
  MobileMilk,
  MobileCo,
  MobileOr,
  MobileSc
} from "../../images";
export default function Gallery() {
  return (
    <>
      <Container>
        <ImagWrap>
          <Imag src={Milkbottles} alt="milk bottles" srcSet={`${MobileMilk} 375w`} />

          <Imag src={Orange} alt="orange" srcSet={`${MobileOr} 375w`} />
        </ImagWrap>
        <ImagWrap>
          <Imag src={Cone} alt="cone"srcSet={`${MobileCo} 375w`} />
          <Imag src={Sugercubes}alt="suger cubes" srcSet={`${MobileSc} 375w`} />
        </ImagWrap>
      </Container>
    </>
  );
}
