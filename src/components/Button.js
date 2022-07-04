import {Link} from "react-router-dom";

function Button({to, text}){
  return(
    <Link to ={to} className='btn btn-primary'>{text}</Link>
  );
}

export default Button;