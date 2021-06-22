import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Description from '../description';
import Generate from '../generate';
import Message from '../message';
import ErrorPage from '../errorPage';

const Routing = () => {
    return <Router>
        <Header/>
        <Description/>
        <Switch>
            <Route exact path='/' component={Generate}/>
            <Route exact path='/messages/:id' component={Message}/>
            <Route path='*' component={ErrorPage}/>
        </Switch>
    </Router>;
};

export default Routing;