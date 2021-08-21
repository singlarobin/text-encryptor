import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Generate from '../generate';
import Message from '../message';
import ErrorPage from '../errorPage';
import { HOMEPAGE_PATH } from '../constants';

const Routing = () => {
    return <Router>
        <Header />
        <Switch>
            <Route exact path={HOMEPAGE_PATH} component={Generate} />
            <Route exact path={`${HOMEPAGE_PATH}messages/:id`} component={Message} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </Router>;
};

export default Routing;