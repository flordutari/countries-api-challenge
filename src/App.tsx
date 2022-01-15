import { Route, Routes } from 'react-router';
import './App.scss';
import { CardDetail } from './components/CardDetail';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
	return (
			<div className="App">
				<Header />
				<div className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:id" element={<CardDetail />} />
					</Routes>
				</div>
			</div>
	);
}

export default App;
