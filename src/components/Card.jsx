function Card ({children}) {
    return(
        <div className="shadow-lg rounded-lg w-full overflow-hidden">{children}</div>
    )
  }

  function Title ({children}) {
    return(
        <h1 className="font-semibold text-xl pt-6 pb-2 px-4 border-b-2 border-slate-100">{children}</h1>
    )
  }

  function Body ({children}) {
    return (
        <div className="py-6 px-4">{children}</div>
    )
  }

  function Footer ({children}) {
    return(
        <div className="px-4 py-2 bg-slate-100">{children}</div>
    )
  }

  Card.Title = Title;
  Card.Body = Body;
  Card.Footer = Footer;

  export default Card;