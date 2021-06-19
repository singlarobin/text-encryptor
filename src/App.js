import './App.css';
import Error_page from './page_404';
import Home from './home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

const App = () => {
  return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={Error_page} />
				</Switch>
			</BrowserRouter>
		</>
  );
};

export default App;
