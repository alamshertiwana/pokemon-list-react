import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function Pokemon(){

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {
        setLoading(true); //setting loading to true in the start before starting fetch
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( (response) => response.json() )
        .then( (data) => setData(data))
        .then( ()=>setLoading(false) ) //setting the loading to false once fetch is complete  
        .catch(setError); //catching an error if fetch fails
    },[id]);

    if(error)
        return (<pre>{error}</pre>)

    return(
        <div className="pokemon-detail container px-4 main-area">
        <div className="row gx-5">

            <div className={`col-4 mb-3 ${loading===true ? "loading-image-item" :""} `}>
            <img className="img-fluid" src={data!=null ? data['sprites']['other']['official-artwork']['front_default'] : ''} alt={data!=null ? data.name : ''} />
            </div>
            <div className="col-8 mb-3">
            <h3 className="pokemon-name text-capitalize font-weight-bold"><span className={loading === true ? 'loading-text-item': ''} >{data!=null && data.name}</span></h3>
            <ul className="list-group list-group-flush">
                <li key="height" className={`list-group-item ${loading===true ? "loading-text-item" :""} `} >
                { data !=null && 
                    <span><strong>Height:</strong> {data.height}</span> 
                }
                </li>
                <li key="weight" className={`list-group-item ${loading===true ? "loading-text-item" :""} `}>
                { data !=null && 
                    <span><strong>Weight:</strong> {data.weight}</span> 
                }
                </li>
                <li key="species" className={`list-group-item ${loading===true ? "loading-text-item" :""} `}>
                { data !=null && 
                    <span><strong>Species:</strong> {data.species.name}</span> 
                }              
                </li>
                <li key="base" className={`list-group-item ${loading===true ? "loading-text-item" :""} `}>
                { data !=null && 
                    <span><strong>Base Experience:</strong> {data.base_experience}</span> 
                }              
                </li>
                <li key="abilities" className={`list-group-item ${loading===true ? "loading-text-item" :""} `}>
                {data!=null && <strong>Abilities:</strong> } {data!=null && data.abilities.map( (item,i) =>  (<span key={i} className='pokemon-ability'>{item.ability.name}</span>)   )}
                </li>
            </ul>                
            </div>          

        </div>      
        </div>
        
    );
}

export default Pokemon;