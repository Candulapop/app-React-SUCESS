import { useEffect, useState } from "react"
import { getProductos } from "../productosServices"

  
function ProductosListado () {

const [loading, setLoading] = useState(true)
const [productos,setProductos] = useState([])

useEffect(()=>{
  const request = async () => {
      try{
        const response = await getProductos()
        setProductos(response.docs);
        setLoading(false);
      }catch(e){
        console.log(e)
      }

    
  }
  request()
},[])



if(loading){
    return(
        <div>cargando</div>
    )
} else 
{
    return (

        <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        
            <tbody>
          {productos.map((producto)=>(
            <tr key={producto.id}>
                <td>{producto.data().title}</td>
                <td>{producto.data().price}</td>
                <td></td>
                <td></td>
            </tr>
          ))}
            </tbody>
        
        </table>
        </div>

)}

//data()devuelve info del documento

//doc es para que al leer nuestra base de datos nos traiga todos los documentos para que muestre la colecion//





} export default ProductosListado
