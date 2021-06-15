import './App.css';
import Page from './components/page';
import Routing from './components/router';

const App = () => {

    return <Page>
        <div className={'appContainer'}>
            <Routing/>
        </div>
    </Page>;
};

export default App;
