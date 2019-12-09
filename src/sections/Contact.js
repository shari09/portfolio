import React, {Component} from 'react';
import styled from 'styled-components';
import constants, {screenSizes, colours} from '../constants.js';


const Container = styled.div`
  padding: 50px 10px 30px 10px;
  background-color: ${colours.DARK_GRAY};
`;

const Wrapper = styled.div`
  max-width: 1400px;
  text-align: center;
  margin: auto;
  color: white;
`;


const Heading = styled.p`
  font-family: Nunito, sans-serif;
  font-size: 240%;
  width: 100%;
`;

const Icon = styled.i`
  font-size: 300%;
  margin: 10px;
  color: white;

  &:hover {
    color: gray;
    transition: color 500ms ease;
  }
`;

const Line = styled.hr`
  width: 5%;
  margin: auto;
  border: 1px solid white;
  border-radius: 2px;
  margin-bottom: 10px;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container id={this.props.id}>
        <Wrapper>
          <Heading>Contact Me</Heading>
          <Line/>
          <a href='https://www.instagram.com/shari09x/' target='_blank'>
            <Icon className='fa fa-instagram'/>
          </a>
          <a href='https://github.com/shari09' target='_blank'>
            <Icon className='fa fa-github'/>
          </a>
          <a href='mailto: shari.s093w@gmail.com subject=subject text'>
            <Icon className='fa fa-envelope'/>
          </a>

        </Wrapper>
      </Container>
    );
  }
}


export default Contact;