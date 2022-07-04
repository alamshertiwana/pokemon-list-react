import Pagination from './Pagination';
import List from './List';
import Loading from './Loading';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function Page(){

  const [data, setData]       = useState(null);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);
  const { id }                = useParams();
  const per_page              = 20;

  let [page_number,setPage]  = useState(1);
 
  useEffect( ()=> {
    
    setLoading(true); //setting loading to true in the start before starting fetch

    if(id !== undefined)
      setPage(id);
  
    let offset = (page_number-1) * per_page;
  
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
    .then( (response) => response.json() )
    .then( (data) => setData(data))
    .then( ()=>setLoading(false) ) //setting the loading to false once fetch is complete
    .catch(setError); //catching an error if fetch fails
  },[id,page_number]);

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

export default Page;