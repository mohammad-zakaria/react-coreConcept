import logo from './logo.svg';
import './App.css';

function App() {
  const students = ['Aafia', 'Yahya', 'Jahed', 'Zunaid', 'Zakariyya']
  const products = [
    {name:'Photoshop', price:'$200'},
    {name:'Ilustrator', price:'$400'},
    {name:'Indesgn', price:'$333'},
    {name:'PDF Reader', price:'$999'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react Person!</p>
        <Person name = {students[0]}></Person>
        <Person name = {students[2]}></Person>
        <Person name = {students[3]}></Person>
        <Person name = {students[4]}></Person>
        <Product product={products[0]} ></Product>
        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width: '200px',
    float:'left'
  }
  
  const {name, price} = props.product
  console.log(props.product)
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  );
}

function Person(props){
  return (
    <div>
      <ul>
          <li>{props.name}</li>
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
