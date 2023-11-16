import Header from '../Header';
import Button from '../Button/Button';
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
  <div className='max-w-xl mx-auto flex justify-between relative bg-white py-5 hover:bg-gray-50 px-4'>
    <div className=''>
  <div className='text-lg font-medium text-gray-900'>{product.number}. {product.name}</div>
  
  </div><div><Button title='Добавено!'/></div>
  </div>
)
})}
    
    </div>
  );
}

export default App;
