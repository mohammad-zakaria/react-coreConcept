import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = ['Aafia', 'Yahya', 'Jahed', 'Zunaid', 'Zakariyya']
  const products = [
    { name: 'Photoshop', price: '$200' },
    { name: 'Illustrator', price: '$400' },
    { name: 'Indesign', price: '$333' },
    { name: 'PDF Reader', price: '$999' }
  ]
  const productNames = products.map(product => product.name);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>I am a react Person!</p>
        <Person name={students}></Person>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '300px',
    width: '200px',
    float: 'left'
  }

  const { name, price } = props.product
  // console.log(props.product)
  return (
        <div style={productStyle}>
          <h2>{name}</h2>
          <h1>{price}</h1>
          <button>Buy now</button>
        </div>
        );

}

function Person(props) {
  return (
    <div>
      <ul>
        {
          props.name.map(student => <li>{student}</li>)
        }
      </ul>
    </div>
  );
}


// function Person(props){
//   const personStyle = {
//     border: '2px solid green',
//     margin: '10px'
//   }
//   console.log(props);
//   return (
//   <div style={personStyle}>
//     <h1>name:{props.name}</h1>
//     <p>Student of the Year</p>
//   </div>
//   );
// }

export default App;
