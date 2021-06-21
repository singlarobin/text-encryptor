import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Description from '../description';
import Generate from '../generate';
import Message from '../message';
import Error from '../error';

const Routing = () => {
    return <Router>
        <Header/>
        <Description/>
        <Switch>
            <Route exact path='/' component={Generate} />
            <Route exact path='/messages/:id' component={Message} />
            <Route path='*' component={Error} />
        </Switch>
    </Router>;
};

export default Routing;