import React from 'react';
import { SubscriptionWrapper, SubsWrapperLevelOne, SubsWrapperLevelTwo } from '../../styles/SubscriptionSection.styled';
import { MainHeading, Para, Span, Button } from '../../bem/BEM.styled';

const SubscriptionSection = (props) => {
    return (
        <SubscriptionWrapper>
            <MainHeading className="heading">Monthly Subscription</MainHeading>
            <SubsWrapperLevelOne>
                <SubsWrapperLevelTwo>
                    <Para className='price'>$29 </Para>
                    <Span className='renewal__time'>per month</Span>
                </SubsWrapperLevelTwo>
                <Para className='tag__line'>Full access for less than $1 a day</Para>
            </SubsWrapperLevelOne>
            <Button>Sign Up</Button>
        </SubscriptionWrapper>
    );
}

export default SubscriptionSection;