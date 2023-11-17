import Button from '../Button/Button';
const Products = (props) => {
const  { product, deleteProduct, index } = props 

const handlDeleteProduct = (id) => {
  deleteProduct(id)
}
return(
    <div className='mb-5'>
      
                 <div className='max-w-xl mx-auto flex justify-between relative bg-white py-5 hover:bg-gray-50 px-4'>
                       <div className='flex items-center'>
                      

                          <div className='text-lg font-medium text-gray-900'>
                           {index + 1}.
                         </div>
                         <div>
                        {product.name}
                         </div>

                      </div>

                      <div className='flex gap-10'>

                          <div><Button title='Добавлено!'/></div>
                          <a onClick={() =>  handlDeleteProduct(product.id)} className='text-red-600 flex flex-col justify-around border text-center border-amber-600 border-solid rounded-md bg-red-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
</a>
                          
                     </div>
                    
                     
                </div>
     </div>
)
}
export default Products
