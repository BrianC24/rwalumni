import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

// mock backend data
import { data } from './data/data';

// testing so i dont have to login everytime
import uuid from 'uuid/v1';
// import profile from './assets/profile.png';
import profileGray from './assets/profile-gray.png';



// components
import Nav from './components/Nav/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Alumni from './components/Alumni/Alumni';
import Resources from './components/Resources/Resources';
import Forum from './components/Forum/Forum';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';


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

  deleteApplication = (index) => {
    let apps = [...this.state.currentUser.applications];
    apps.splice(index, 1)
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        applications: apps
      }
    })
  }

  addApplication = (a) => {
    let apps = [...this.state.currentUser.applications, a];
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        applications: apps
      }
    })
  }

  updateApplication = (i, category , value) => {
    let newApp = { ...this.state.currentUser.applications[i], [category]: value};
    let apps = [...this.state.currentUser.applications];
    apps.splice(i, 1, newApp);
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        applications: apps
      }
    })
  }

  login = (user) => {
    this.setState({ 
      currentUser: user,
      isLoggedIn: true
    });
    
    this.props.history.push("/profile");
  }

  logout = () => {
    this.setState({
      currentUser: {},
      isLoggedIn: false
    }, () => this.props.history.push("/login"))
  }
  addUser = (user) => {
    let newUsers = [...this.state.users, user]
    this.setState({
      users: newUsers,
      currentUser: user
    }, () => this.props.history.push("/profile"))
  }

  render() {
    return (
      
      <div className="app">
        <Nav isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/alumni" render={(renderProps) => <Alumni alumni={this.state.users}/>} />
            <Route path="/resources" render={(renderProps) => <Resources />} />
            <Route path="/forum" render={(renderProps) => <Forum />} />
            <Route path="/profile" render={(renderProps) => <Profile users={this.state.users} update={this.updateApplication} delete={this.deleteApplication} add={this.addApplication} user={this.state.currentUser}/>} />
            <Route path="/login" render={(renderProps) => <Login users={this.state.users} login={this.login}/>} />
            <Route path="/register" render={(renderProps) => <Register register={this.addUser}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
