import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

// mock backend data
import { data } from './data/data';

// testing so i dont have to login everytime
import uuid from 'uuid/v1';
import profile from './assets/profile.png';


// components
import Nav from './components/Nav/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Alumni from './components/Alumni/Alumni';
import Resources from './components/Resources/Resources';
import Forum from './components/Forum/Forum';
import Profile from './components/Profile/Profile';
import { appendFile } from 'fs';

class App extends Component {
  state = {
    users: data.users,
    posts: data.posts,
    currentUser: {
      id: uuid(),
      username: 'bcanlas',
      fName: 'Brian',
      lName: 'Canlas',
      password: 'sample',
      email: 'sample@gmail.com',
      phone: '(111) 111 - 111',
      applications: [
          {
              id: uuid(),
              company: 'Redwood',
              jobTitle: 'Dev',
              dateApplied: '10/10/18',
              contact: 'Harrison (111) 111-111',
              recruiter: 'NA',
              lastContact: '10/20/18',
              phase: 'Offer',
              notes: 'Cool cool cool'
          }
      ],
      profilePic: profile,
      posts: [],
      currentPosition: 'Dev - RWCA',
      employed: true,
      cohort: 'Summer 17'
    },
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
    console.log(i)
    console.log(category)
    console.log(value)
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

  render() {
    return (
      
      <div className="app">
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <div className="content">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/alumni" render={(renderProps) => <Alumni />} />
            <Route path="/resources" render={(renderProps) => <Resources />} />
            <Route path="/forum" render={(renderProps) => <Forum />} />
            <Route path="/profile" render={(renderProps) => <Profile update={this.updateApplication} delete={this.deleteApplication} add={this.addApplication} user={this.state.currentUser}/>} />
            <Route path="/login" render={(renderProps) => <Login users={this.state.users} login={this.login}/>} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
