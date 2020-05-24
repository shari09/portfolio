import React, {Component} from 'react';
import styled from 'styled-components';
import SquareDisplay from '../components/SquareDisplay.js';
import constants, {screenSizes, colours} from '../constants.js';

const description = `
  || Hello, there's not much to say about me. I'm currently a grade 11
  student at RHHS and I like many things. I like drawing, painting,
  cooking, baking, etc. This September, after going to my first Hackathon,
  I realized how much I lack in terms of skills. I did not know the existence
  of servers, dynamic pages, algorithms, etc. I barely knew anything.
  For the entire time, all I could make was only a .html file with 
  some info and pictures. However, I learned how much I didn't know. After that
  first week of September, I was motivated to improve and catch up to everyone.
  I know I'm late by several years, but I'll do whatever I can to catch up :D
`;

const firstBox = {
  heading: 'Web app',
  content: `Although inexperienced, I have some experience with web app developing. In the future, I'm planning on creating a mobile app using React-Native so please look forward to it!`,
};

const secondBox = {
  heading: 'Misc',
  content: `During my free time, I enjoy spending time with my friends. We watch movies, go out to places to eat, shop, play sports, etc. I also do drawing and likes to play ping pong with my brother (occasinally). If you ever want a chat, feel free to contact me!`,
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: white;

  padding-top: ${constants.NAVBAR_HEIGHT};
  padding-bottom: 30px;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    flex-flow: row wrap;
  }
`;

const LinkWrapper = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const Link = styled.a`
  display: inline-block;
  color: white;
  padding: 20px 10px;
  text-decoration: none;
  background-color: ${colours.DARK_PURPLE};
`;

const StyledDescription = styled.div`
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 150%;
  color: ${colours.EVEN_DARKER_PURPLE};

  padding-left: 5%;
  padding-right: 5%;

  overflow-wrap: break-word;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    width: 40%
    padding: 0;
    margin-left: 5%;
    margin-right: auto;
  }
`;

const StyledHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-family: Montserrat, Arial, sans-serif;
  color: ${colours.DARK_GRAY};
  font-size: 300%;
  margin-bottom: 30px;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    text-align: left;
    margin-left: 5%;
  }
`;

const Line = styled.hr`
  width: 40%;
  margin: auto;
  border: 2px solid ${colours.DARK_PURPLE};
  border-radius: 2px;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    width: 7%
    margin: 0;
  }
`;

const Heading = (props) => {
  return (
    <StyledHeading>
      {props.children}
      <Line />
    </StyledHeading>
  );
};

const Description = (props) => {
  return (
    <StyledDescription>
      {description}
      <LinkWrapper>
        <Link href="./resources/exit_resume.pdf" target="_blank">
          Resume
        </Link>
      </LinkWrapper>
    </StyledDescription>
  );
};

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper id={this.props.id}>
        <Heading>About Me</Heading>
        <Description />
        <SquareDisplay heading={firstBox.heading} content={firstBox.content} />
        <SquareDisplay
          heading={secondBox.heading}
          content={secondBox.content}
        />
      </Wrapper>
    );
  }
}

export default AboutMe;
