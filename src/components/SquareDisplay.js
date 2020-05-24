import React, {Component} from 'react';
import styled from 'styled-components';
import {screenSizes, colours} from '../constants.js';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-family: Raleway, sans-serif;
  color: white;
  background-color: ${colours.DARK_PURPLE};

  border: 10px solid ${colours.DARK_PURPLE};
  border-radius: 50px 50px 50px 0px;

  margin-top: 20px;
  margin-bottom: 20px;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    width: 20%;
    height: 20%;
    margin-right: 5%;
    margin-top: 0;
  }
`;

const StyledHeading = styled.div`
  text-align: center;
  font-size: 150%;
`;

const Line = styled.hr`
  border: 1px solid ${colours.EVEN_DARKER_PURPLE};
  width: 70%;
  margin: auto;
`;

const StyledContent = styled.div`
  font-family: Nunito, sans-serif;
  font-size: 120%;
  padding-top: 20px;
`;

const Heading = (props) => {
  return (
    <StyledHeading>
      <Line />
      {props.children}
      <Line />
    </StyledHeading>
  );
};

const Content = (props) => {
  return <StyledContent>{props.children}</StyledContent>;
};

class SquareDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper id={this.props.id}>
        <Heading>{this.props.heading}</Heading>
        <Content>{this.props.content}</Content>
      </Wrapper>
    );
  }
}

export default SquareDisplay;
