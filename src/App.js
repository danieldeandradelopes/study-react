import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-movies">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
