import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '@babel/polyfill';
import loadable from '@loadable/component';
import Page1 from './components/Page1';
import Header from './components/Header';
import './assets/css/stylesheet.css';
import Ico from './assets/img/icons/favicon.ico';
import IcoPng from './assets/img/icons/favicon-32x32.png';
import IcoApple from './assets/img/icons/apple-touch-icon.png';

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
          <Helmet>
            <link rel="shortcut icon" href={Ico}/>
            <link rel="icon" type="image/png" href={IcoPng} sizes="32x32"/>
            <link rel="apple-touch-icon" sizes="180x180" href={IcoApple}/>
            <meta name="description" content="Dan Beck web portfolio showing off technologies such as:
            Webpack, React, Express.js, SQL and much more..."/>
            <meta name="google-site-verification" content="X8OqgyRttHLj--5YTsujWFPMcwduXRBONxuj82j7l9I" />
          </Helmet>
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
