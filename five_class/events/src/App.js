import Events from "./component/1-events/Events";
import Counter from "./component/2-class_component/Counter";


function App() {
  return (
    <div className="App">
      <Events />
      <Counter />
      <Counter count={5} />
    </div>
  );
}

export default App;
