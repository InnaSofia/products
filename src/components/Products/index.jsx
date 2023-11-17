import Button from '../Button/Button';
const Products = (props) => {
const  { product } = props 
return(
    <div className='mb-5'>
  <div className='max-w-xl mx-auto flex justify-between relative bg-white py-5 hover:bg-gray-50 px-4'>
    <div>
  <div className='text-lg font-medium text-gray-900'>{product.number}. {product.name}</div>
  
  </div><div><Button title='Добавлено!'/></div>
  
  </div></div>
)
}
export default Products
