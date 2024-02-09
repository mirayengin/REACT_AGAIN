import './App.css';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import data from "./data";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Card data = {data} />
      <Footer/>
    </div>
  );
}

export default App;
