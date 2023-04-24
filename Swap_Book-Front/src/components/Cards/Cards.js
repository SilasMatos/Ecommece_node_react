import '../Cards/cardsStyle.css'
import { Link } from 'react-router-dom'
function Cards({name, price, synopsis, src, _id}) {

  return (

      <div className="card">
        <img
         src={`http://localhost:3333/${src}`}
          alt="Denim Jeans"
        ></img>
        <h1>{name}</h1>
        <p className="price">R${price}</p>
        <p>{synopsis}</p>
        <p><Link to={`/details/${_id}`}>Detalhes</Link></p>
        <p>
         <button>Add to cart</button>
        </p>
        
      </div>
        

  )
}
export default Cards
