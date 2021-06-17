import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import Description from '../description';
import Generate from '../generate';
import Message from '../message';

const Routing = () => {
    return <Router>
        <Header/>
        <Description/>
        <Switch>
            <Route exact path='/' component={Generate} />
            <Route exact path='/messages/:id' component={Message} />
        </Switch>
    </Router>;
};

export default Routing;