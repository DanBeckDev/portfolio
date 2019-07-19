import React from 'react';
import { Helmet } from 'react-helmet';
import '@babel/polyfill';
import Page1 from './components/Page1';
import Header from './components/Header';
import './assets/css/stylesheet.css';
import Ico from './assets/img/icons/favicon.ico';
import IcoPng from './assets/img/icons/favicon-32x32.png';
import IcoApple from './assets/img/icons/apple-touch-icon.png';
import IcoSafari from './assets/img/icons/safari-pinned-tab.svg';

const App = () => <>
  <Helmet>
    <link rel="shortcut icon" href={Ico} />
    <link rel="icon" type="image/png" href={IcoPng} sizes="32x32" />
    <link rel="apple-touch-icon" sizes="180x180" href={IcoApple} />
    <link rel="mask-icon" href={IcoSafari} />
    <link rel="msapplication-TileColor" content="#2b5797" />
  </Helmet>
  <Header/>
  <Page1 />
</>;
export default App;
