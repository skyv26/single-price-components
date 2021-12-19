import styled from 'styled-components';
import { Section } from '../bem/BEM.styled';
import { media } from '../bem/screenWidth';

export const IntroWrapper = styled(Section)`
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.2rem 1.72rem;

    .heading {
        font-size: 1.485rem;
    }

    & :first-child {
        color: hsl(179, 62%, 43%);
        font-weight: 700;
    }

    .Intro__ParaTwo {
        color: hsl(71, 73%, 54%);
        font-size: 1.11rem;
        font-weight: 700;
        line-height: 1.35;
    }

    .Intro__LastPara {
        font-size: 1.025rem;
        line-height: 1.8;
        color: hsl(218, 22%, 67%);
    }

    @media ${media.ip5} {
        padding: 2.5rem 2.1rem;
        gap: 2rem;

        .heading {
            font-size: 1.65rem;
        }
    
        & :first-child {
            color: hsl(179, 62%, 43%);
            font-weight: 700;
        }
    
        .Intro__ParaTwo {
            font-size: 1.24rem;
        }
    
        .Intro__LastPara {
            margin-top: -0.5rem;
            font-size: 1.16rem;
            line-height: 1.9;
        }   
    }

    @media ${media.galaxy} {
        padding: 2.5rem 2.3rem;
        gap: 2.4rem;

        .heading {
            font-size: 1.9rem;
        }
    
        & :first-child {
            color: hsl(179, 62%, 43%);
            font-weight: 700;
        }
    
        .Intro__ParaTwo {
            font-size: 1.4rem;
        }
    
        .Intro__LastPara {
            margin-top: -0.5rem;
            font-size: 1.32rem;
            line-height: 1.9;
        }   
    }

    @media ${media.ipX} {
        padding: 2.75rem 2.4rem;
        gap: 2.4rem;

        .heading {
            font-size: 1.96rem;
        }
    
        & :first-child {
            color: hsl(179, 62%, 43%);
            font-weight: 700;
        }
    
        .Intro__ParaTwo {
            font-size: 1.45rem;
        }
    
        .Intro__LastPara {
            margin-top: -0.5rem;
            font-size: 1.35rem;
            line-height: 1.9;
        }   
    }

    @media ${media.pixel} {
        padding: 3.25rem 2.6rem;
        gap: 2.6rem;

        .heading {
            font-size: 2.15rem;
        }
        
        .Intro__ParaTwo {
            font-size: 1.6rem;
        }
    
        .Intro__LastPara {
            margin-top: -0.5rem;
            font-size: 1.5rem;
            line-height: 1.9;
        }   
    }

    @media ${media.mylaptop} {
        padding: 3.9rem;
        gap: 2.5rem;

        .heading {
            font-size: 2.24rem;
        }
        
        .Intro__ParaTwo {
            font-size: 1.67rem;
        }
    
        .Intro__LastPara {
            margin-top: -1.8rem;
            font-size: 1.49rem;
            line-height: 1.7;
        }   
    }

    @media ${media.laptopL} {
        padding: 4rem;
        gap: 2.5rem;

        .heading {
            font-size: 2.35rem;
        }
        
        .Intro__ParaTwo {
            font-size: 1.75rem;
        }
    
        .Intro__LastPara {
            margin-top: -1.8rem;
            font-size: 1.57rem;
            line-height: 1.7;
        }   
    }
`;


