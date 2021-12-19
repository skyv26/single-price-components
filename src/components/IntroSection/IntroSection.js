import React from 'react';
import { IntroWrapper } from '../../styles/IntroSection.styled';
import { MainHeading, Para } from '../../bem/BEM.styled';


const IntroSection = (props) => {
    return (
        <IntroWrapper>
            <MainHeading className='heading'>Join our community</MainHeading>
            <Para className='Intro__ParaTwo'>30-day, hassle-free money back guarantee</Para>
            <Para className='Intro__LastPara'>
                Gain access to our full library of tutorials along with
                expert code reviews. Perfect for any developers who are
                serious about honing their skills.
            </Para>
        </IntroWrapper>
    );
}

export default IntroSection;