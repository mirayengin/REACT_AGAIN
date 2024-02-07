import './App.css';
import Card from './components/card/Card';
import data from "./util/data"

function App() {
  return (
    <div className="App">
      <h1>Languages</h1>
      {/* <Card data={data} /> */}
      {data.map((item) => {
        let {id,img,language,btnName} = item
        return (
          <Card data={item} />
        )
      })}
      
    </div>
  );
}

export default App;
