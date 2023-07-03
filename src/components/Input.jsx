function Input ({type="text", ...props}) {
    return(
      <input {...props} className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-400 focus:ring-2 focus:outline-none focus:border-gray-100 w-full p-2.5 transition duration-300"} type={type} />
    )
  } 
  
  function Label ({children, ...props}){
    return(
    <label {...props}>{children}</label>
    )
  }

Input.Label = Label;

export default Input;  