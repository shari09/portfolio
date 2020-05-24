import React, {Component} from 'react';
import styled from 'styled-components';
import Typing from '../components/Typing.js';
import {screenSizes, colours} from '../constants.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(
      ${colours.LOW_OPC_GRAY},
      ${colours.LOW_OPC_BLACK}
    ),
    url('./resources/background.png');
  background-size: cover;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const ProfilePic = styled.img`
  border-radius: 35%;
  grid-column: 1;
  grid-row: 2 / span 2;
  max-width: 100%;
  max-height: 100%;
  justify-self: center;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 1;
    grid-row: 2 / span 2;
    justify-self: end;
  }
`;

const Desc = styled.div`
  grid-column: 1;
  grid-row: 4;
  align-self: center;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 2;
    grid-row: 2 / span 2;
  }
`;

const Name = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  align-self: end;
  text-align: center;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 2;
    grid-row: 3;
    text-align: left;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper
        id={this.props.id}
        onScroll={() => {
          console.log('hi');
        }}>
        <Desc>
          <Name>
            <p style={{'font-size': '20px'}}>HELLO, MY NAME IS </p>
            <p style={{'font-size': '80px'}}>Shari Sun</p>
          </Name>
          <Typing />
        </Desc>
        <ProfilePic
          src="./resources/me.png"
          alt="uh oh something went wrong D:"
        />
      </Wrapper>
    );
  }
}

export default Home;
