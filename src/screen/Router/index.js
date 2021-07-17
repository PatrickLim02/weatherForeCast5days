import React, { useState, useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import Detail from '../Detail';

const Navigation = () =>{
    return(
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/details" component={Detail} />
        </Router>
    )
};

export default Navigation;