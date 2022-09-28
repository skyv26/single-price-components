import React from "react";
import {
  WhyWrapper,
  UnorderedList,
  List,
} from "../../styles/WhySection.styled";
import { MainHeading } from "../../bem/BEM.styled";

const WhySection = (props) => {
  return (
    <WhyWrapper>
      <MainHeading className="heading">Why Us</MainHeading>
      <UnorderedList>
        <List>Tutorials by industry experts</List>
        <List>Peer &amp; expert code review</List>
        <List>Coding exercises</List>
        <List>Access to our GitHub repos</List>
        <List>Community forum</List>
        <List>Flashcard decks</List>
        <List>New videos every week</List>
      </UnorderedList>
    </WhyWrapper>
  );
};

export default WhySection;
