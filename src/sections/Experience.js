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
  date: 'July 2019 - present',
  content: ['Camp counsellor', 'Junior robotics instructor'],
  href: 'http://www.thesteamproject.ca',
};

const secondBox = {
  icon: 'fa fa-code',
  heading: 'Hatch Canada',
  date: 'Nov 2019 - present',
  content: [
    'Leader In Training (LIT) program coordinator',
    'Project creator/editor',
    'Alpha curriculum (Gr9+) developer',
  ],
  href: './resources/presentation.pdf',
};

const thirdBox = {
  icon: 'fa fa-code',
  heading: 'Dairy Queen',
  date: 'July 2019 - Aug 2019',
  content: ['Basic crew member'],
};

const Tooltip = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #101010;
  padding: 2px;
  text-align: center;
  border-radius: 1px;
  width: 200px;
  margin: auto;
  font-family: Montserrat, Mukta, sans-serif;
  font-size: 80%;
  margin-bottom: 10px;
`;

class HeadingWithTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      x: 0,
      y: 0,
    };

    this.tooltipStyle = {
      position: 'absolute',
      backgroundColor: 'white',
      border: '0.5px solid $101010',
      padding: 2,
      textAlign: 'center',
      borderRadius: 1,
      width: 200,
      fontFamily: 'Montserrat, Mukta, sans-serif',
      fontSize: '80%',
    };
  }

  handleMouseMove(e) {
    e.persist();
    this.setState((state) => ({
      x: e.screenX,
      y: e.screenY,
    }));
  }

  render() {
    return (
      <div>
        <Heading
          onMouseOver={() => this.setState((state) => ({hover: true}))}
          onMouseMove={this.handleMouseMove.bind(this)}
          onMouseOut={() => this.setState((state) => ({hover: false}))}>
          {this.props.children}
        </Heading>
        {this.state.hover ? (
          <div
            style={{
              ...this.tooltipStyle,
              ...{
                position: 'absolute',
                // top: 500,
                left: this.state.x,
              },
            }}>
            Outdated (Dec 2019), Please proceed to my Github to see latest
            achievements
          </div>
        ) : undefined}
      </div>
    );
  }
}

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container id={this.props.id}>
        <HeadingWithTooltip>Things I've Done</HeadingWithTooltip>
        <Line />
        <Wrapper>
          <WorkBox
            icon={firstBox.icon}
            heading={firstBox.heading}
            date={firstBox.date}
            content={firstBox.content}
            href={firstBox.href}
          />
          <WorkBox
            icon={secondBox.icon}
            heading={secondBox.heading}
            date={secondBox.date}
            content={secondBox.content}
            href={secondBox.href}
          />
          <WorkBox
            icon={thirdBox.icon}
            heading={thirdBox.heading}
            date={thirdBox.date}
            content={thirdBox.content}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Experience;
