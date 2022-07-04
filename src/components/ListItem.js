import Button from "./Button";

function createName(name){    
    let text = name;
    const words = text.split("-");
    let newText =words[0];
    
    for(let i=1; i<words.length; i++){
        newText = newText+" "+words[i];
    }
    
    return newText;
}

function ListItem( {item, isItem} ){

    if(isItem){
        item.name = createName(item.name);
    }

    return(
      <li className="list-group-item d-flex" key={item.name} >
        <span className='list-item-name me-auto'>{item.name}</span>
        {isItem === false &&
            <Button to={`/pokemon/${item.url.split('/')[6]}`} text="View Details" /> 
//            <Link to ={`/pokemon/${item.url.split('/')[6]}`} className='btn btn-primary'>View Details</Link>
        }
      </li>    
    );
  }

  export default ListItem;