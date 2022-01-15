import { Route, Routes } from 'react-router';
import './App.scss';
import { CardDetail } from './components/CardDetail';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

function App() {
	return (
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/detail/:id" element={<CardDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
	);
}

export default App;
