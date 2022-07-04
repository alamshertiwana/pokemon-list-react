
import {Link} from 'react-router-dom'

function Pagination({page,prev,next,isItem}){
  let pageType = "page";

  if(isItem)
    pageType = "items-page";

  return(
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {prev != null &&
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)-1}`} className="page-link" >Previous</Link></li>
        }
        {page >= 3 &&
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)-2}`} className="page-link" >{parseInt(page)-2}</Link></li>
        }        
        {page >= 2 &&
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)-1}`} className="page-link" >{parseInt(page)-1}</Link></li>
        }
        <li className="page-item"><Link to={`/${pageType}/${page}`} className="page-link active" >{parseInt(page)}</Link></li>
        {next != null &&        
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)+1}`} className="page-link">{parseInt(page)+1}</Link></li>
        }
        {next != null &&        
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)+2}`} className="page-link">{parseInt(page)+2}</Link></li>
        }
        {next != null &&
          <li className="page-item"><Link to={`/${pageType}/${parseInt(page)+1}`} className="page-link" >Next</Link></li>
        }
      </ul>
    </nav>
  );

}

export default Pagination;