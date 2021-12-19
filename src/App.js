import React, { Fragment } from "react";
import { GlobalStyle } from "./bem/BEM.styled";
import { Main, Container } from "./bem/BEM.styled";
import IntroSection from "./components/IntroSection/IntroSection";
import { LevelTwo } from "./bem/BEM.styled";
import SubscriptionSection from "./components/SubscriptionSection/SubscriptionSection";
import WhySection from "./components/WhySection/WhySection";

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>
          <IntroSection />
          <LevelTwo>
            <SubscriptionSection />
            <WhySection />
          </LevelTwo>
        </Container>
      </Main>
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
          Coded with ❤️ By <a href="https://www.frontendmentor.io/profile/skyv26">Aakash Verma</a>.
        </p>
      </footer>
    </Fragment>
  );
};

export default App;