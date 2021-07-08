import { useState } from 'react';
import './App.css';
import Page from './components/page';
import Routing from './components/router';

const App = () => {
    const [, setRefresher] = useState();

    const updateComponent = (refresher = null) => refresher && setRefresher(refresher);

    return <Page shouldComponentUpdate={updateComponent}>
        <div className='appContainer'> <Routing /> </div>
    </Page>;
};

export default App;
