import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const a = 5;
const element = (<>
  <h1>Hello {a}</h1>
  <p>fragment ile sarmalla</p>
</>);

const elementComponent = () => {
  return (<>
    <h1>Hello {a}</h1>
    <p>fragment ile sarmalla</p>
  </>
  )
};

const Element = () => {
  return (<>
    <App/>
    <h1>Hello {a}</h1>
    <p>fragment ile sarmalla</p>
    <Child /> 
    {Child()}
  </>
  )
};
// Component içinde componenti bu şekilde cağırıyoruz.En alttaki kullanılan yöntem değil ama olabilir. Componentleri istediğiniz kadar ve yerde kullanabilirsiniz.

const Child = () => {
  return (
    <p>Child</p>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
//root.render(element);
//root.render(elementComponent()); // Bu bir funtıon ve bunu render edebiliyoruz.
root.render(<Element/>); // Bunu component olarak çağırmak için önce uppercase olmalı ve sonra bu render da component olarak çağırabiliyoruz. Tabi bunu yapmak için illa function olmalı


// Birden fazla element sarmallama yapılmalı yansıtmak için