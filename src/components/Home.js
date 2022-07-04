import Pagination from './Pagination';
import List from './List';
import Loading from './Loading';
import { useState, useEffect } from "react";

function Home(){

  const [data, setData]       = useState(null);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);
  let page_number             = 1 ;
 
  useEffect( ()=> {
    
    setLoading(true); //setting loading to true in the start before starting fetch
    
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then( (response) => response.json() )
    .then( (data) => setData(data))
    .then( ()=>setLoading(false) ) //setting the loading to false once fetch is complete
    .catch(setError); //catching an error if fetch fails
  },[]);

  if(loading)
    return (
      <div className="container px-4">
        <div className="row g-4">
          <div className="col">
            <Loading/>
          </div>
        </div>
      </div>      
    );    
  if(error)
    return (<pre>{error}</pre>)
  if(!data)
    return null;

  return(
    <div className="container px-4">
      <div className="row g-4">
        <div className="col">
          <List data={data} />
        </div>
        <div className="row g-4">
          <Pagination page={page_number} prev={data.previous} next={data.next} />
        </div>
      </div>
    </div>  
  );
}

export default Home;