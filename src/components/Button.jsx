export default function Button (props) {
    const {className = "bg-blue-700", text, children} = props;
    return(
      <button {...props} className={`${className} px-4 py-2.5 whitespace-nowrap text-white rounded`}>
        {text || children}
      </button>
    )
  }
