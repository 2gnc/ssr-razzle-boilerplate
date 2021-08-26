import * as React from 'react';
import { v4 } from 'uuid';
import logo from './react.svg';
import './Home.css';

const Home: React.FC = () => (
    <div className="Home">
        <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to рарар</h2>
            <h3>{process.env.NODE_ENV}</h3>
        </div>
        <p className="Home-intro">
            To get started, edit
            {' '}
            <code>src/App.js</code>
            {' '}
            or
            {' '}
            <code>src/Home.js</code>
            {' '}
            and save to reload. Enjoy
        </p>
        <div>
            {v4()}
        </div>
        <ul className="Home-resources">
            <li>
                <a href="https://github.com/jaredpalmer/razzle">Docsdkdkdk</a>
            </li>
            <li>
                <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
                <a href="https://palmer.chat">Bla bla bla</a>
            </li>
        </ul>
    </div>
);

export default Home;
