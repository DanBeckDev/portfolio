import React, { Component } from 'react';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
    this.updateWidth();
  }

  updateWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 320) {
      import(/* webpackMode: "eager" */ '../assets/img/space-xs.jpg')
        .then((url) => { this.setState({ url }); });
    } else if (windowWidth <= 640) {
      import(/* webpackMode: "eager" */ '../assets/img/space-sm.jpg')
        .then((url) => { this.setState({ url }); });
    } else if (windowWidth <= 1280) {
      import(/* webpackMode: "eager" */ '../assets/img/space-md.jpg')
        .then((url) => { this.setState({ url }); });
    } else if (windowWidth <= 1920) {
      import(/* webpackMode: "eager" */ '../assets/img/space-lg.jpg')
        .then((url) => { this.setState({ url }); });
    } else {
      import(/* webpackMode: "eager" */ '../assets/img/space-xl.jpg')
        .then((url) => { this.setState({ url }); });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    const { url } = this.state;
    return (
      <div className='hero' style={{ backgroundImage: `url(${url.default})` }}>
        <h1 id='textAni' data-text="I Code Things">I Code Things</h1>
      </div>
    );
  }
}
export default Hero;
