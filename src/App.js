import React from 'react';
import './App.css';
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn'), data: [
        {
          "description": "Hacer lo hacible ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "Comer lo comible ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "Dormir durmiendo",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "trabajr lo trabajable ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Done",
          "dueDate": 156464645646
        }, {
          "description": "beber lo beblible ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Done",
          "dueDate": 156464645646
        }]
    };
    //localStorage.setItem('isLoggedIn', 'false');
    //alert(localStorage.getItem('isLoggedIn'));
    //alert(this.state.isLoggedIn);
  }

  changeStateFalse = () => {
    this.setState({ isLoggedIn: 'false' })
  }

  changeStateTrue = () => {
    this.setState({ isLoggedIn: 'true' })
  }

  render() {

    const changeView = () => {
      window.location.href = "/navigate";
      this.setState({ isLoggedIn: 'true' });
      
    }
    const changeViewProfile = () => {
      window.location.href = "/profile";
    }
    const changeViewNavigation = () => {
      window.location.href = "/navigate";
    }

    const logout = () => {
      window.location.href = "/";
      this.changeStateFalse();
      localStorage.setItem('isLoggedIn','false')
    }

    const LoginView = () => (
      <div>
        <Login changeView={changeView} />
      </div>
    );

    const normalView = () => (
      <Navigation logout={logout} items={this.state.data} new={newTask} profile={changeViewProfile} />
    );
    const profileView = () => (
      <UserProfile update={changeViewNavigation} />
    );


    const newTask = (task) => {

      this.setState({
        data: this.state.data.concat(task)
      });
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.state.isLoggedIn === 'true' ? normalView : LoginView} />
          <Route path="/navigate" component={this.state.isLoggedIn  === 'true' ? normalView : LoginView}/>
          <Route path="/profile" component={this.state.isLoggedIn  === 'true' ? profileView : LoginView} />
        </Switch>
      </Router>
    );
  }
}

export default App;