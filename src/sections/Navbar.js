import React, {Component} from 'react';
import styled from 'styled-components';
import {screenSizes, colours} from '../constants.js';


const navLinks = { //key has to be the same as the id
  home: 'Home',
  aboutMe: 'About Me',
  experience: 'Experience',
  contact: 'Contact'
};

const Wrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
`;

const Nav = styled.nav`
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: 0 0 4px ${colours.DARK_GRAY};
  background-color: ${props => props.transparent ? 'transparent' : colours.DARK_PURPLE};
  transition: background-color 500ms ease;
  position: fixed;
  width: 100%;
`;

const StyledToggle = styled.li`
  font-size: 25px;
  order: 1;

  &:hover {
    cursor: pointer;
  }

  @media all and (min-width: ${screenSizes.MOBILE}) {
    display: none;
  }
`;

const Toggle = (props) => {
  return(
    <div onClick={props.onClick}>
      <StyledToggle>
        <Link><i className={props.toggle ? 'fa fa-times' : 'fa fa-bars'}/></Link>
      </StyledToggle>
    </div>
  );
};


const StyledNavItem = styled.li`
  font-size: 20px;
  white-space: nowrap;

  order: 2;
  text-align: center;
  width: 100%;
  display: ${props => (props.toggle ? 'block' : 'none')};
  

  &:hover {
    background-color: ${props => props.transparent ? 'transparent' : colours.DARKER_PURPLE};
    transition: background-color 300ms ease;
    cursor: pointer;
    border: ${props => props.transparent ? '1px solid ' + colours.DARKER_PURPLE : 'none'};
    transition: border 300ms ease;
  }

  @media all and (min-width: ${screenSizes.MOBILE}) {
    width: auto;
    display: block;
    order: 1;
  }
`;

const Link = styled.a`
  padding: 20px 10px;
  
  color: white;
  text-decoration: none;
  display: block;

  @media all and (max-width: ${screenSizes.MOBILE}) {
    background-color: ${props => props.transparent ? colours.LOW_OPC_BLACK : ''};
  }

`;

const NavItem = (props) => {
  return (
    <StyledNavItem toggle={props.toggle} transparent={props.transparent}>
      <Link onClick={props.onClick} href={props.href} transparent={props.transparent}>
        {props.children}
      </Link>
    </StyledNavItem>
  );
};

const DropDown = (props) => {
  return (
    <StyledNavItem toggle={props.toggle} transparent={props.transparent}>
      <Link onClick={props.onClick} href={props.href} transparent={props.transparent}>
        {props.children}
      </Link>
    </StyledNavItem>
  );
};


const Logo = styled.li`
  color: white;
  margin-left: 20px;
  font-size: 25px;
  
  @media all and (min-width: ${screenSizes.MOBILE}) {
    order: 0;
    margin-right: auto;
    margin-left: 20%;
  }
`;

const RightMargin = styled.div`
  display: none;
  
  @media all and (min-width: ${screenSizes.MOBILE}) {
    display: block;
    width: 70px;
    order: 3;
  }

`;


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      transparent: true
    };
  }

  getItems(links) {
    let items = [];
    for (let key in links) {
      if (key !== 'experience') {
        items.push(<NavItem onClick={this.toggleDisplay} 
                          toggle={this.state.toggle} 
                          transparent={this.state.transparent}
                          href={'#'+key}>
                   {links[key]}
                 </NavItem>);
      } else {
        items.push(<DropDown onClick={this.toggleDisplay} 
                          toggle={this.state.toggle} 
                          transparent={this.state.transparent}
                          href={'#'+key}>
                   {links[key]}
                 </DropDown>);
      }
       
    }
    return items;
  }

  toggleDisplay = () => {
    this.setState(state => ({
      toggle: !state.toggle,
    }));
  }

  collapse = () => {
    this.setState(state => ({
      toggle: false,
    }));
  };

  toggleColourSettings = () => {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    const height = window.innerHeight;
    if (top >= height) {
      this.setState(state => ({
        transparent: false
      }));
    } else {
      this.setState(state => ({
        transparent: true
      }));
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.toggleColourSettings);
    window.addEventListener('scroll', this.collapse);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.toggleColourSettings);
    window.addEventListener('scroll', this.collapse);
  };

  render() {
    return (
      <Nav transparent={this.state.transparent}>
        <Wrapper>
          <Logo>Shari</Logo>
          {this.getItems(navLinks)}
          <Toggle onClick={this.toggleDisplay} toggle={this.state.toggle}/>
          <RightMargin/>
        </Wrapper>
      </Nav>
    );
  }
}

export default Navbar;