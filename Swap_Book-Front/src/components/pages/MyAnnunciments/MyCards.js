import React from 'react'
import styles from './myCards.module.css'
import api from '../../../Services/Api';
import { useEffect ,useContext } from 'react'
import { UserContext } from "../../UseContext/UserContext";


const MyCards = ({name, price, synopsis, _id, src}) => {
  const [userData, setUserData] = useContext(UserContext);


  async function deleteProduct() {
    try {
      await api.delete(`${userData._id}/product/${_id}`,{
        headers: {
          auth: userData._id
        }
      });
      alert("Anuncio deletado com sucesso")
    } catch (err) {
      console.log("Erro ao apagar anuncio");
    }
  }

  return (
    <div className={` cards container d-flex`}>

      <div className="card">
        <img
          src={`http://localhost:3333/${src}`}
          alt="Denim Jeans"
        ></img>
        <h1>{name}</h1>
        <p className="price">R$ {price}</p>
        <p>{synopsis}</p>
        <p>
         <button>Add to cart</button>
         <button onClick={deleteProduct}>Deletar Anuncio</button>
        </p>
        
      </div>
    </div>

  )
}

export default MyCards
