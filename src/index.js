import 'core-js';
import React from 'react';
import ReactDom from 'react-dom';
import { history } from 'src/utils';
import App from './App';
import 'src/styles/index.less';


ReactDom.render(
    <App history={history} />,
    document.getElementById('app')
);
