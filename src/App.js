import React from 'react';
import './App.css';
import Login from "./components/Login";
import NewTask from "./components/NewTask";
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: 'false' };
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
    const data=[   {
      "description": "Hacer lo hacible ",
      "responsible": {
        "name": "Andres Sotelo",
        "email": "andres@gmail"
      },
      "status": "ready",
      "dueDate": 156464645646
    },   {
      "description": "Comer lo comible ",
      "responsible": {
        "name": "Andres Sotelo",
        "email": "andres@gmail"
      },
      "status": "ready",
      "dueDate": 156464645646
    },   {
      "description": "Dormir durmiendo",
      "responsible": {
        "name": "Andres Sotelo",
        "email": "andres@gmail"
      },
      "status": "ready",
      "dueDate": 156464645646
    },   {
      "description": "trabajr lo trabajable ",
      "responsible": {
        "name": "Andres Sotelo",
        "email": "andres@gmail"
      },
      "status": "ready",
      "dueDate": 156464645646
    }]
    const changeView=()=>{
      //window.location.href = "/navigation";
      this.setState({ isLoggedIn: 'true' });
    }

    const logout=()=>{
        window.location.href = "/";
        this.changeStateFalse();
    }
      
    
    const LoginView = () => (
      <div>
        <Login changeView={changeView} />
      </div>
    );

   
    const normalView = () => (
      <Navigation logout={logout} data={data} />
    );

    return (
      <Router>
        
        <Switch>
         
            {this.state.isLoggedIn === 'false' ? <Route exact path="/" component={LoginView} />:
              <div><Route path="/navigate" component={normalView} /> <Redirect
              from="/" to="/navigate" /> </div>} 
        </Switch>
        
      </Router>
    );
  }
}

export default App;