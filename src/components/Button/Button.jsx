function Button (props){
    const {title, changeCount} = props
   
    
 
    return(
     <button onClick={changeCount} className="border border-solid bg-cyan-600 rounded-lg text-lg font-semibold text-white px-4 py-2 shadow-md">
    {title}
         </button>
    ) 
 }
 export default Button