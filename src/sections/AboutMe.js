import React, {Component} from 'react';
import styled from 'styled-components';
import SquareDisplay from '../components/SquareDisplay.js';
import constants, {screenSizes, colours} from '../constants.js';


const description = `
  I am a blah blah blah blah I just need some space filler 
  right now and I will change all of these later and I really
  don't know what to type so hehehhehehehehhehehehehhehe.
  Something about me is that I like food and I like a lot of 
  things. However, I don't like css and making this website was
  a lot of pain so I hope I never have to touch frontend again
  unless necessary. CSS is too haaaard. Oh ya, I've used
  React, Styled-components and is gonna use react-router just to make a 
  static webpage ._.
`;


const firstBox = {
  heading: 'NodeJs',
  content: `I have two weeks of experience
            flaksdjflasdfjlksfj asdfj las s
            adf sdf d d df d fd sds f fd f sd
             adsf as fsd fds fsd fds sd fsdf s`
};

const secondBox = {
  heading: 'Digital Art',
  content: `I'll change all of these later
            sadfjasl so hahhah h hh ah
            sdfsadf fdf df h hsdf ssd f
            sd fsd fsd asdf sdf ds fds ff`
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${colours.LIGHTER_PURPLE};

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
      <Line/>
    </StyledHeading>  
  );
}

const Description = (props) => {
  return (
    <StyledDescription>
      {description}
      <LinkWrapper><Link href='/resources/resume.txt' target='_blank'>Resume</Link></LinkWrapper>
    </StyledDescription>
  );
}


class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper id={this.props.id}>
        <Heading>About Me</Heading>
        <Description/>
        <SquareDisplay heading={firstBox.heading} content={firstBox.content}/>
        <SquareDisplay heading={secondBox.heading} content={secondBox.content}/>
      </Wrapper>
    );
  }
}

export default AboutMe;