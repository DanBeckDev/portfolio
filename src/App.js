import React, { Component } from 'react';
import '@babel/polyfill';
import loadable from '@loadable/component';
import Page1 from './components/Page1';
import Header from './components/Header';
import './assets/css/stylesheet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Page1',
      component: null,
    };
  }

  onRouteChange = (route) => {
    this.setState({ route });
  }

  render() {
    const { route } = this.state;
    if (route === 'Page1') {
      return (
        <>
          <Header onRouteChange={this.onRouteChange}/>
          <Page1 />
        </>
      );
    }
    const PageComponent = loadable(() => import(`./components/${route}`));
    return (
      <>
        <Header />
        <PageComponent fallback={<div>Loading...</div>} onRouteChange={this.onRouteChange} />
      </>
    );
  }
}
export default App;
