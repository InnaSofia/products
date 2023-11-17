import Header from '../Header';
import Products from '../Products';
import { useState } from 'react';


function App() {

  const [products, setProducts] = useState([
    {
      id:1,
     number:1,
      name: 'Молоко'
    },
    {
      id:2,
      number:2,
      name: 'Хлеб'
    },
    {
      id:3,
      number:3,
      name: 'Кефир'
    },
    {
      id:4,
      number:4,
      name: 'Конфеты'
    }
  ])

  const deleteProduct = (id) => {
    const filterdProducts = products.filter(product => product.id !== id)
    setProducts(filterdProducts)
  }
  return (
    <div>
   <Header />
   {products.length === 0 && (
   <div className='text-6xl text-gray-500 text-center flex flex-col items-center mt-[100px]'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

    <p>Список покупок пуст</p>
   </div>
   )} 
    {products.length > 0 && products.map((product) => {
           return(
      <Products key= {product.id} product={product} deleteProduct={deleteProduct}/>
      
)})

}
   
    
    </div>
  );}

export default App;
