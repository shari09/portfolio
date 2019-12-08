import React, {Component} from 'react';
import styled from 'styled-components';
import Typing from '../components/Typing.js';
import {screenSizes, colours} from '../constants.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient(${colours.LOW_OPC_GRAY}, ${colours.LOW_OPC_BLACK}), url('https://wallpaperaccess.com//full/51426.jpg');
  background-size: cover;

  
  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-template-columns: 4fr 4fr 2fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    &:after {
      grid-column: 1 / span 4;
    }
  }

`;

const ProfilePic = styled.img`
  border-radius: 40%;
  grid-column: 1;
  grid-row: 2 / span 2;
  max-width: 100%;
  max-height: 100%;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 3;
    grid-row: 2 / span 2;
  }
`;

const Name = styled.div`
  grid-column: 1;
  grid-row: 4;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  align-self: end;
  text-align: center;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 2 / col-end;
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
      <Wrapper id={this.props.id} onScroll={() => {console.log('hi')}}>
        <Name>
          <p style={{'font-size': '20px'}}>HELLO, MY NAME IS </p>
          <p style={{'font-size': '80px'}}>Shari Sun</p>
        </Name>
        <Typing/>
        <ProfilePic
             src='https://d3kqdc25i4tl0t.cloudfront.net/articles/content/92_408268_151204profilepicture_hero.jpg' 
             alt='uh oh something went wrong D:'/>
      </Wrapper>
    );
  }
}

export default Home;