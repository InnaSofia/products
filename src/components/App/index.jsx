import Header from '../Header';
import Products from '../Products';
import { useState } from 'react';


function App() {

  const [products, setProducts] = useState([
    {
     number:1,
      name: 'Молоко'
    },
    {
      number:2,
      name: 'Хлеб'
    },
    {
      number:3,
      name: 'Кефир'
    },
    {
      number:4,
      name: 'Конфеты'
    }
  ])
  return (
    <div>
   <Header />
   {products.map((product) =>{
           return(
      <Products product={product}/>
)})}
    
    </div>
  );}

export default App;
