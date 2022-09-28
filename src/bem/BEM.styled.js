import styled, { createGlobalStyle } from "styled-components";
import { media } from "./screenWidth";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
    }

    html {
        font-size: 62.5%;
        height: 100%;
        background-color: hsl(204, 43%, 93%);
    }

    body {
        min-height: 100%;
        max-width: 375px;
        margin: auto;
    }

    .attribution { 
        font-size: 11px; 
        text-align: center;
    }
    .attribution a { 
        color: crimson; 
        text-decoration: none;
    }

    @media ${media.pixel} {
        body {
            max-width: 411px;
        }
    }

    @media ${media.mylaptop} {
        body {
            max-width: 1366px;
        }
    }

    @media ${media.laptopL} {
        body {
            max-width: 1440px;
        }
    }
`;

export const Section = styled.section({
  display: "flex",
  width: "100%",
});

export const Para = styled.p({});

export const Span = styled.span({});

export const Button = styled.button({});

export const Wrapper = styled.div({
  display: "flex",
});

export const Main = styled.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const Container = styled(Section)`
  flex-direction: column;
  width: 83%;
  height: 100%;
  margin: 5.4rem auto;
  background-color: white;
  border-radius: 7px;
  overflow: hidden;

  @media ${media.ip5} {
    margin: 6rem auto;
  }

  @media ${media.galaxy} {
    margin: 7rem auto;
  }

  @media ${media.ipX} {
    margin: 7.25rem auto;
  }

  @media ${media.pixel} {
    margin: 7.75rem auto;
  }

  @media ${media.mylaptop} {
    width: 44.25%;
    margin: 15.4rem auto;
  }

  @media ${media.laptopL} {
    width: 44.25%;
    margin: 16.6rem auto;
  }
`;

export const MainHeading = styled(Para)({});

export const LevelTwo = styled(Wrapper)`
  flex-direction: column;
  @media ${media.mylaptop} {
    flex-direction: row;
  }
`;
