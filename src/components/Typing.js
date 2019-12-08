import React, {Component} from 'react';
import styled from 'styled-components';
import {screenSizes, colours} from '../constants.js';


const signatures = [
  'this looks cool',
  ':DDDDD',
  'hello world',
  'css is tooooooo hard',
  'doesn\'t this look cool',
  'I know this looks really cool',
  'Amirite',
  'node.js is badass rockstar tech and mongodb is web scale',
  'make that two sentences',
  'save it, save it',
  'se no! demo sonnan ja dame mou sonnan ja hora kokoro wa shinka suru yo motto motto!',
  'making duber greet and meet selling meat while heating heat-meat sheets yeet'
];

//hardcoded part do not worry too much about it
const StyledDiv = styled.div`
  text-align: center;
  grid-column: 1;
  grid-row: 5;
  margin: 0px 10px;

  @media all and (min-width: ${screenSizes.MOBILE}) {
    grid-column: 2 /span 3;
    grid-row: 4;
    margin: 0;
    text-align: left;
  }
`; 

const StyledSpan = styled.span`
  background-color: transparent;
  border: 1px solid ${colours.TYPING_PURPLE};
  line-height: 34px;
  color: white;
  padding: 1%;
  font-family: Verdana, sans-serif;
  margin-left: auto;
  margin-right: auto;
  
`;


class Typing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedWord: '',
      addingLetters: true
    };
    this.adding = {
      id: '', 
      speed: 100
    }; //setinterval id and speed
    this.deleting = {
      id: '', 
      speed: () => {return Math.floor(Math.random()*20)+20}
    };
    this.signatures = signatures;
    this.used = [];
    this.curIndex = [Math.floor(Math.random()*this.signatures.length), 0];
    
  }

  newIndex() {
    this.used.push(this.curIndex[0]);
    if (this.used.length === this.signatures.length) {
      this.used = [];
      return (Math.floor(Math.random()*this.signatures.length));
    } else {
      let idx = Math.floor(Math.random()*this.signatures.length);
      while (this.used.indexOf(idx) !== -1) {
        idx = Math.floor(Math.random()*this.signatures.length);
      }
      return idx;
    }
  }

  addingLetters() {
    //if the entire word is used
    if (this.curIndex[1]-1 === this.signatures[this.curIndex[0]].length) {
      this.setState(state => ({
        addingLetters: false
      }));

      clearInterval(this.typingID);
      this.typingID = setInterval(() => {
        this.updateLetters();
      }, this.deleting.speed());
      
    } else {
      this.curIndex[1]++;
    }
  }

  deletingLetters() {
    if (this.curIndex[1] === 1) {
      this.setState(state => ({
        addingLetters: true
      }));

      this.curIndex[0] = this.newIndex();

      clearInterval(this.typingID);
      this.typingID = setInterval(() => {
        this.updateLetters();
      }, this.adding.speed);

    } else {
      this.curIndex[1]--;
    }
  }

  updateLetters() {
    if (this.state.addingLetters) {
      this.addingLetters();
    } else {
      this.deletingLetters();
    }

    this.setState(state => ({
      typedWord: this.signatures[this.curIndex[0]].slice(0, this.curIndex[1])
    }));
  }

  componentDidMount() {
    this.typingID = setInterval(() => {
      this.updateLetters();
    }, this.adding.speed);
  }

  componentWillUnmount() {
    clearInterval(this.typingID);
  }

  render() {
    return (
      <StyledDiv>
        <StyledSpan>
          {this.state.typedWord}|
        </StyledSpan>
      </StyledDiv>
    );
  }
}

export default Typing;