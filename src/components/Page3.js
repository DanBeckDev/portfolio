import React from 'react';

const Page3 = ({ onRouteChange }) => (
  <div className='App'>
    <header>
      <h1>Test App</h1>
    </header>
    <button onClick={() => onRouteChange('Page1')}>Page1</button>
    <button onClick={() => onRouteChange('Page2')}>Page2</button>
  </div>
);
export default Page3;
