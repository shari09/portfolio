import React, {Component} from 'react';
import styled from 'styled-components';
import {screenSizes, colours} from '../constants';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 10px 30px 10px;
  width: 100%;
  font-family: Raleway, sans-serif;
  text-align: left;

  color: ${colours.EVEN_DARKER_PURPLE};

  @media all and (min-width: ${screenSizes.MOBILE}) {
    width: 30%;
  }
`;

const Icon = styled.div`
  background-color: white;
  font-size: 250%;
  margin-bottom: auto;
  margin-left: auto;
  padding: 0 5px;
  height: 42%vw;
  border: 2px solid ${colours.DARK_PURPLE};
  border-radius: 10px 0 0 0;
  border-width: 2px 0 2px 2px;
`;

const Description = styled.div`
  background-color: white;
  margin-right: auto;
  border: 2px solid ${colours.DARK_PURPLE};
  border-radius: 0 10px 10px 10px;
  padding: 10px;
  width: 100%;
`;

const Heading = styled.a`
  font-size: 10vw;
  text-decoration: none;
  color: ${colours.EVEN_DARKER_PURPLE};

  @media all and (min-width: ${screenSizes.MOBILE}) {
    font-size: 200%;

    &:hover {
      color: ${colours.DARKEST_PURPLE};
      cursor: pointer;
    }
  }
`;

const Line = styled.hr`
  width: 50%;
  margin: 5px 0 15px 0;
  border: 1px solid ${colours.DARK_PURPLE};
  border-radius: 1px;
`;

const Content = styled.ul`
  list-style-type: none;
`;

const Date = styled.div`
  font-size: 70%;
  font-family: sans-serif;
  margin-left: 10px;
  color: ${colours.DARK_PURPLE};
`;

class WorkBox extends Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  parseContent = () => {
    return this.content.map((item) => <li>{'> ' + item}</li>);
  };

  render() {
    return (
      <Wrapper>
        <Icon>
          <i className={this.props.icon} />
        </Icon>
        <Description>
          <Heading href={this.props.href} target="_blank">
            {this.props.heading}
          </Heading>
          <Date>{this.props.date}</Date>
          <Line />
          <Content>{this.parseContent()}</Content>
        </Description>
      </Wrapper>
    );
  }
}

export default WorkBox;
