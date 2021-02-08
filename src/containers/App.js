import { Component } from 'react';
import './App.css';
import Content from 'components/Content.js';
import Cover from 'components/Cover.js';
import Footer from 'components/Footer.js';
import Project from 'components/Project.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <div style={{ height: '3000px' }}>
          <Cover />
        </div>
        <Content />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
