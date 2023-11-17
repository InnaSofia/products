function Button (props){
    const {title, changeCount} = props
   
    
 
    return(
     <Button onClick={changeCount} className="border border-solid bg-cyan-600 hover:bg-cyan-800 rounded-lg text-lg font-semibold text-white px-4 py-2 shadow-md">
    {title}
         </Button>
    ) 
 }
 export default Button