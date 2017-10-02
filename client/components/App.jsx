import React, { Component } from 'react';
import { Link } from 'react-router';

import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  render() {
    return (
      <div className="app">
      <header className="primary-header" />
      <aside className="primary-aside">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </aside>
      <main>
        {this.props.children}
      </main>
    </div>
    );
  }
}

export default App;
