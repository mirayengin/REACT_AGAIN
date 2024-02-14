import Events from "./component/1-events/Events";
import Counter from "./component/2-class_component/Counter";
import UseStateCounter from "./component/3-useStateHook/UseStateCounter";


function App() {
  return (
    <div className="App">
      <Events />
      <Counter />
      <Counter count={5} />
      <UseStateCounter/>
    </div>
  );
}

export default App;
