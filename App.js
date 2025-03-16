import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import StoreList from './components/Store/StoreList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/stores" component={StoreList} />
            </Switch>
        </Router>
    );
};

export default App;