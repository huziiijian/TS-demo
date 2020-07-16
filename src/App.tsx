import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './router';
import { RouteComponentProps } from "react-router-dom";
import './store'
interface props extends RouteComponentProps {}
const App = (props:props) => (
    <Router history={props.history}>
        {renderRoutes(Routes)}
    </Router>
);


export default App;
