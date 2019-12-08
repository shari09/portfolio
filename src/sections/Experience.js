import React, {Component} from 'react';
import styled from 'styled-components';
import constants, {screenSizes, colours} from '../constants.js';
import WorkBox from '../components/WorkBox.js';


const Container = styled.div`
  padding-top: ${constants.NAVBAR_HEIGHT};
  padding-bottom: 50px;
  background-color: ${colours.LIGHT_PURPLE};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: auto;
  text-align: center;
  max-width: 1400px;
  justify-content: space-between;
  align-items: flex-start;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    flex-flow: row wrap;
  }
`;

const Heading = styled.div`
  text-align: center;
  font-size: 250%;
  margin-bottom: 10px;
  font-family: Montserrat, Mukta, sans-serif;
`;

const Line = styled.hr`
  margin: auto;
  width: 150px;
  border: 2px solid ${colours.TYPING_PURPLE};
  border-radius: 4px;
  margin-bottom: 50px;
`;


const firstBox = {
  icon: 'fa fa-code',
  heading: 'The STEAM project',
  content: [
    'Camp counsellor',
    'Junior robotics instructor'
  ]
};

const secondBox = {
  icon: 'fa fa-code',
  heading: 'Hatch Canada',
  content: [
    'LIT program coordinator',
    'Project creator',
    'etc etc',
    'asdfsad',
    'adsf'
  ],
  href: './hatchWork.html'
};

const thirdBox = {
  icon: 'fa fa-code',
  heading: 'Dairy Queen',
  content: [
    'basic crew member'
  ]
};

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container id={this.props.id}>
        <Heading>Things I've Done</Heading>
        <Line/>
        <Wrapper>
          <WorkBox icon={firstBox.icon} 
                   heading={firstBox.heading} 
                   content={firstBox.content}
          />
          <WorkBox icon={secondBox.icon} 
                   heading={secondBox.heading} 
                   content={secondBox.content}
                   href={secondBox.href}
          />
          <WorkBox icon={thirdBox.icon} 
                   heading={thirdBox.heading} 
                   content={thirdBox.content}
          />
        </Wrapper>
      </Container>
    );
  };
}

export default Experience;