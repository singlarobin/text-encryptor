import './App.css';
import Page from './components/page';
import Header from './components/header';
import Description from './components/description';
import Generate from './components/generate';
// import classes from '*.module.css';

const App = () => {

    return <Page>
        <div className={'appContainer'}>
            <Header/>
            <Description/>
            <Generate/>
        </div>
    </Page>;
};

export default App;
