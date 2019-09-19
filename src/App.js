import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { withRouter } from 'react-router-dom';

class App extends Component {

  navigate(param) {
    this.props.history.location.pathname = '/';
    this.props.history.push(param);
  }

  render() {
    let nav;
    if (document.URL.includes('home') || document.URL.includes('profile') || document.URL.includes('register') || document.URL.includes('tmark') || document.URL.includes('profile/entry') || document.URL.includes('inverter')) {
      nav = (<nav className="nav" id="nav">
        <div style={{ 'padding': '13px 0px 0px 0px', 'width': '450px' }}>
          <span className="link" onClick={() => this.navigate('profile')}>Profile</span>
          <span className="link" onClick={() => this.navigate('inverter')}>Inverter</span>
          <span className="link" onClick={() => this.navigate('register')}>Registration</span>
          <span className="link" onClick={() => this.navigate('tmark')}>TutorialMark</span>
          <span className="link" onClick={() => this.navigate('login')}>Log Out</span>
        </div>
      </nav>);
    }
    else {
      nav = '';
    }
    return (
      <div className="App">
        {nav}
          <Router />
      </div>
    );
  }
}

export default withRouter(App);
