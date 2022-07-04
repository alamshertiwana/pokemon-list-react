import {Link} from 'react-router-dom'

function Loading({isItem = false}){

  let list_items = [];

  for(let i=0; i<=20; i++){
    if(isItem)
        list_items.push( <li className="list-group-item d-flex" key={i} > <span className='pokemon-name me-auto loading-text-item'></span> </li>)
    else 
        list_items.push( <li className="list-group-item d-flex" key={i} > <span className='pokemon-name me-auto loading-text-item'></span> <Link to ='#' className='btn btn-primary'>View Details</Link> </li>)
  }

  return(
    <ul className="list-group list-group-flush pokemon-list">
        {list_items}
    </ul>
  );
}

export default Loading;