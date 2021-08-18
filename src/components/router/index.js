import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Generate from '../generate';
import Message from '../message';
import ErrorPage from '../errorPage';

const Routing = () => {
    return <Router>
        <Header />
        <Switch>
            <Route exact path='/text-encryptor/' component={Generate} />
            <Route exact path='/text-encryptor/messages/:id' component={Message} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </Router>;
};

export default Routing;