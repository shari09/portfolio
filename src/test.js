const React = require('react');
const ReactDOM = require('react-dom');

const name = {
  firstName: 'Shari',
  lastName: 'Cherry'
};

function GuestWelcome(props) {
  return (
    <h1>
      Welcome, guest {props.name.firstName}!
    </h1>
  );
}

function UserWelcome(props) {
  return (
    <h1>
      Welcome, user {props.name.firstName}!
    </h1>
  );
}

function Greeting(props) {
  if (props.loggedIn) return <UserWelcome name={name}/>
  return <GuestWelcome name={name}/>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      colour: 'red'
    };

  }

  handleLoginClick = () => {
    this.setState({loggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({loggedIn: false});
  }

  render() {
    let button;
    if (this.state.loggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }
  
    return (
      <div>
        <Greeting loggedIn={this.state.loggedIn}/>
        {button}
      </div>
    );
  }
}


class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It's {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState(state => ({
      value: value
    }));
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' onChange={this.handleChange}/>
        </label>
        <input type='Submit' value='Submit'/>
      </form>
    );
  }
}

function App(props) {
  return (
    <div>
      <Time/>
      <Login/>
      <WordForm/>
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);