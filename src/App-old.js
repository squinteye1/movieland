import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const name = "Neil";
  const isNameShowing = false;
  const Person = (props) => {
    return (
      <>
      <h1>First Name: {props.name}</h1>
      <h2>Surname: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      </>
    )
  }

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
     {/* <Person name={'Evan'} lastName={'McKay'} age={10} />
      <Person name={'Neil'} lastName={'McKay'} age={47} />
      <Person name={'Shibhon'} lastName={'Forbes'} age={43}/>
      <Person name={'Scot'} lastName={'McKay'} age={16}/>
      <h1>Hello World! Hello {name} {isNameShowing ? name : 'John Doe'} </h1>
      {name ? (
        <>
          test
        </>
      ) : (
        test
      ) } */}

      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  );
}

export default App;
