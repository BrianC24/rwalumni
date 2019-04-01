import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

// mock backend data
import { data } from './data/data';

// components
import Nav from './components/Nav/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Alumni from './components/Alumni/Alumni';
import Resources from './components/Resources/Resources';
import Forum from './components/Forum/Forum';
import Profile from './components/Profile/Profile';

class App extends Component {
  state = {
    users: data.users,
    posts: data.posts,
    currentUser: {},
    isLoggedIn: false
  }

  componentDidMount() {
    console.log(data);
  }

  login = (user) => {
    this.setState({ 
      currentUser: user,
      isLoggedIn: true
    });
    
    this.props.history.push("/profile");
  }

  render() {
    return (
      
      <div className="app">
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <div className="content">

          {/* {this.state.isLoggedIn && <Redirect to='/profile' />} */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/alumni" render={(renderProps) => <Alumni />} />
            <Route path="/resources" render={(renderProps) => <Resources />} />
            <Route path="/forum" render={(renderProps) => <Forum />} />
            <Route path="/profile" render={(renderProps) => <Profile user={this.state.currentUser}/>} />
            <Route path="/login" render={(renderProps) => <Login users={this.state.users} login={this.login}/>} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
