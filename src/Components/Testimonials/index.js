import React from "react";

import { Emily, Jennie, Thomas } from "../../images";
import {
  Container,
  TestClient,
  TestClientJob,
  TestContainer,
  TestImg,
  Feedback,
  TestWrap,
  Title,
  FeedbackWrap
} from "./TestimonialsElements";
export default function Testimonials() {
  return (
    <>
      <Container>
        <Title> Client testimonials </Title>
        <TestContainer>
          <TestWrap>
            <TestImg src={Emily} alt="Emily" />
            <FeedbackWrap>
              <Feedback>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </Feedback>
            </FeedbackWrap>
            <TestClient>Emily R. </TestClient>
            <TestClientJob>Marketing Director</TestClientJob>
          </TestWrap>
          <TestWrap>
            <TestImg src={Thomas} alt=" thomas" />
            <FeedbackWrap>
              <Feedback>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </Feedback>
            </FeedbackWrap>
            <TestClient>Thomas S. </TestClient>
            <TestClientJob>Chief Operating Officer</TestClientJob>
          </TestWrap>
          <TestWrap>
            <TestImg src={Jennie} alt="Jennie" />
            <FeedbackWrap>
              <Feedback>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </Feedback>
            </FeedbackWrap>
            <TestClient> Jennie F. </TestClient>
            <TestClientJob>Business Owner</TestClientJob>
          </TestWrap>
        </TestContainer>
      </Container>
    </>
  );
}
