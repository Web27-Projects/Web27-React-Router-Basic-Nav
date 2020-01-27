import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link path to="/">Home</Link>
        </div>
        <div>
          <Link path to="about">About</Link>
        </div>
        <div>
          <Link path to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
