import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className="App">
			<Nav />
			<Intro />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
