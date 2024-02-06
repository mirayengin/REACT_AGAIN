import './App.css';
import Person from './components/Person';
import data from "./data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <h3>Hello React</h3>
      {data.map((item) => {
        return (
          <>
          {/*<Person key = {item.name} name={item.name} img = {item.img} tel = {item.tel} />*/ }
          <Person key = {item.name} props = {item} />
          </>

        )
      })}
      
    </div>
  );
}

export default App;
