import styled from 'styled-components';
import { Section } from '../bem/BEM.styled';
import { media } from '../bem/screenWidth';


export const WhyWrapper = styled(Section)`
    flex-direction: column;
    background-color: hsla(179, 62%, 43%, 0.85);
    padding: 1.4rem 1.8rem;
    gap: 1.25rem;
    .heading {
        font-size: 1.325rem;
        font-weight: 700;
        color: white;
    }

    @media ${media.ip5} {
        padding: 1.75rem 2rem;
        gap: 1.6rem;
        .heading {
            font-size: 1.5rem;
        }   
    }

    @media ${media.galaxy} {
        padding: 1.9rem 2.2rem;
        gap: 1.8rem;
        .heading {
            font-size: 1.75rem;
        }   
    }

    @media ${media.ipX} {
        padding: 1.9rem 2.4rem;
        gap: 1.75rem;
        .heading {
            font-size: 1.8rem;
        }   
    }
    
    @media ${media.pixel} {
        padding: 2.25rem 2.5rem;
        gap: 2rem;
        .heading {
            font-size: 2rem;
        }   
    }

    @media ${media.mylaptop} {
        padding: 3.6rem;
        padding-top: 3.5rem;
        width: 50%;
        
        gap: 1.75rem;
        .heading {
            font-size: 1.75rem;
        }   
    }
    @media ${media.laptopL} {
        padding: 3.8rem;
        width: 50%;
        
        gap: 1.75rem;
        .heading {
            font-size: 1.77rem;
        }   
    }

`;

export const UnorderedList= styled.ul`
    list-style: none;
`;

export const List = styled.li`
    color: hsl(204, 43%, 93%);
    letter-spacing: 0.14px;
    line-height: 1.5;
    
    @media ${media.ip5} {
        letter-spacing: 0.14px;
        line-height: 1.5;
        font-size: 1.14rem;
    }
    
    @media ${media.galaxy} {
        letter-spacing: 0.14px;
        line-height: 1.5;
        font-size: 1.3rem;
    }

    @media ${media.ipX} {
        letter-spacing: 0.14px;
        line-height: 1.49;
        font-size: 1.34rem;
    }

    @media ${media.pixel} {
        letter-spacing: 0.14px;
        line-height: 1.49;
        font-size: 1.49rem;
    }

    @media ${media.mylaptop} {
        letter-spacing: 0.2px;
        line-height: 1.48;
        font-size: 1.28rem;
    }
    @media ${media.laptopL} {
        letter-spacing: 0.2px;
        line-height: 1.5;
        font-size: 1.35rem;
    }
`;