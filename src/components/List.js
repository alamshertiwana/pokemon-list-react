import ListItem from "./ListItem";

function List( {data, isItem = false} ){
  return(
    <ul className="list-group list-group-flush pokemon-list">
    {data.results.map( (item) => (
        <ListItem item={item} key={item.name} isItem = {isItem} />
      ))}            
  </ul>
  );
}

export default List;