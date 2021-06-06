import './App.css';
import Header from './components/header';
import Description from './components/description';
import Generate from './components/generate';

const App = () => {

    return <div className={'app'}>
        <Header/>
        <Description/>
        <Generate/>
    </div>;
};

export default App;
