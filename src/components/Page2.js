import React from 'react';

const Page2 = ({ onRouteChange }) => <div className='App'>
    <header>
      <h1>Test App</h1>
    </header>
    <button onClick={() => onRouteChange('Page1')}>Page1</button>
    <button onClick={() => onRouteChange('Page3')}>Page3</button>
  </div>;
export default Page2;
