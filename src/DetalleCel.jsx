
// Importación de módulos y funciones:
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductosbyId } from "./productosServices";
/*
Se importan las funciones useEffect y useState de React, así como useParams de react-router-dom. También se importan la función
getById desde el módulo llamado "productosServices".
*/

function DetalleCel(){
   

  // Uso de useParams para obtener el parámetro id de la URL:
  // useParams es un hook de React Router que permite acceder a los parámetros de la URL.
   const {id} = useParams();
  // celus almacena el estado de los datos de un celular específico.
   const [celus, setCelus]=useState([]);
 // loadingcelus indica si los datos están cargando o no.
   const [loadingcelus, setLoadingcelus]=useState(true);
   const navigate = useNavigate();

// Uso de useEffect para realizar una solicitud de datos cuando el componente se monta o cuando el parámetro id cambia:
// useEffect se utiliza para realizar efectos secundarios en el componente, como realizar solicitudes a una API. En este caso, se utiliza para obtener los detalles del celular con el id proporcionado.
useEffect(()=>{
  const request =async ()=>{
    const response = await (id);
    try {
      const response = await getProductosbyId(id);
      setCelus(response);
      setLoadingcelus(false)
    } catch (error) {
      navigate("notFound");
    }
  }
  request()
},[id, navigate])
      
      /*Si loadingcelus es false, se renderiza la información del celular, como el título, precio e id, junto con un botón de compra.
      */
      
        if(loadingcelus){
            return <div>cargando </div>;
        }else {
          const { title, price, pictures } = producto;
            return(
                <div>

         <ul>
         <p>{title}</p>
         <p>{price}</p>
         <p>id: {id}</p>
         <div>
          {pictures.map(({ id,secure_url })=>(
           <img key={id} src={secure_url} alt="" />
          ))}
        
</div>

        </ul>
        <button>Comprar</button>
                </div>
            )
        }
    }

export default DetalleCel

//celus.title//

//min 1:05 dia 20/02 React UTN, tiene muchos problemas no se porque
