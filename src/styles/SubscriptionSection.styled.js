import styled from 'styled-components';
import { Section, Wrapper } from '../bem/BEM.styled';
import { media } from '../bem/screenWidth';

export const SubscriptionWrapper = styled(Section)`
    background-color: hsl(179, 62%, 43%);
    flex-direction: column;
    padding: 2.25rem 1.8rem;
    gap: 1.2rem;
    
    .heading {
    
        font-size: 1.325rem;
        font-weight: 700;
        color: white;
    }

    button {
        border: none;
        font-size: 1.15rem;
        font-weight: 700;
        padding: 1.2rem;
        border-radius: 5px;
        margin-top: 1rem;
        color: white;
        background-color: hsl(71, 73%, 54%);
    }

    @media ${media.ip5} {
        padding: 2.25rem 1.9rem;
        gap: 1.5rem;

        .heading {    
            font-size: 1.5rem;
        }
    
        button {
            font-size: 1.3rem;
            padding: 1.25rem;
            margin-top: 1.1rem;
        }
        
    }

    @media ${media.galaxy} {
        padding: 2.75rem 2.25rem;
        gap: 1.75rem;

        .heading {    
            font-size: 1.7rem;
        }
    
        button {
            font-size: 1.6rem;
            padding: 1.25rem;
            margin-top: 1.1rem;
        }
        
    }
    
    @media ${media.ipX} {
        padding: 2.9rem 2.25rem;
        gap: 1.75rem;

        .heading {    
            font-size: 1.775rem;
        }
    
        button {
            font-size: 1.62rem;
            padding: 1.625rem;
            border-radius: 7px;
            margin-top: 1.1rem;
        }
        
    }
    @media ${media.pixel} {
        padding: 2.8rem 2.4rem;
        gap: 1.9rem;

        .heading {    
            font-size: 1.95rem;
        }
    
        button {
            font-size: 1.725rem;
            padding: 1.8rem;
            border-radius: 7px;
            margin-top: 1.1rem;
        }
        
    }

    @media ${media.mylaptop} {
        padding-top: 3.5rem;
        padding-left 3.8rem;
        padding-right 4rem;
        width: 50%;
        gap: 1.6rem;

        .heading {    
            font-size: 1.7rem;
        }
    
        button {
            font-size: 1.1rem;
            padding: 1.65rem;
            border-radius: 5px;
            margin: 1.1rem 0;
        }
        
    }

    @media ${media.laptopL} {
        padding-top: 4rem;
        padding-left 4rem;
        padding-right 4rem;
        width: 50%;
        gap: 1.6rem;

        .heading {    
            font-size: 1.76rem;
        }
    
        button {
            font-size: 1.6rem;
            padding: 1.5rem;
            border-radius: 5px;
            margin: 1.3rem 0;
        }
        
    }
    
`;

export const SubsWrapperLevelOne = styled(Wrapper)`
    flex-direction: column;
    gap: 0.65rem;

    .tag__line {
        font-size: 1.17rem;
        font-weight: 400;
        color: white;
    }

    @media ${media.ip5} {
        gap: 0.65rem;
        .tag__line {
            font-size: 1.34rem;
        }
    }

    @media ${media.galaxy} {
        gap: 1rem;
        .tag__line {
            font-size: 1.51rem;
        }
    }

    @media ${media.ipX} {
        gap: 0.6rem;
        .tag__line {
            font-size: 1.575rem;
        }
    }

    @media ${media.pixel} {
        gap: 0.75rem;
        .tag__line {
            font-size: 1.735rem;
        }
    }

    @media ${media.mylaptop} {
        gap: 0.75rem;
        .tag__line {
            font-size: 1.475rem;
        }
    }

    @media ${media.laptopL} {
        gap: 0.75rem;
        .tag__line {
            font-size: 1.575rem;
        }
    }
`;

export const SubsWrapperLevelTwo = styled(Wrapper)`
    flex-direction: row;
    align-items: center;
    gap: 0.65rem;
    .price {
        font-size: 2.4rem;
        font-weight: 700;
        color: white;
    }

    .renewal__time {
        font-size: 1.25rem;
        color: hsl(204, 43%, 93%);
    }

    @media ${media.ip5} {
        gap: 1rem;
        .price {
            font-size: 2.75rem;
        }
    
        .renewal__time {
            font-size: 1.35rem;
        }
    }

    @media ${media.galaxy} {
        gap: 1.2rem;
        .price {
            font-size: 3rem;
        }
    
        .renewal__time {
            font-size: 1.5rem;
        }
    }
    @media ${media.ipX} {
        gap: 1.2rem;
        .price {
            font-size: 3.25rem;
        }
    
        .renewal__time {
            font-size: 1.55rem;
        }
    }

    @media ${media.pixel} {
        gap: 1.2rem;
        .price {
            font-size: 3.6rem;
        }
    
        .renewal__time {
            font-size: 1.75rem;
        }
    }

    @media ${media.mylaptop} {
        gap: 1.15rem;
        .price {
            font-size: 3.125rem;
        }
    
        .renewal__time {
            font-size: 1.475rem;
        }
    }

    @media ${media.laptopL} {
        gap: 1.15rem;
        .price {
            font-size: 3.2rem;
        }
    
        .renewal__time {
            font-size: 1.6rem;
        }
    }
    
`;

