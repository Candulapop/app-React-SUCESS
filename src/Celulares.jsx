import { useEffect, useState} from "react";
import Celus from "./Celus.jsx";
//import { getProductosbyId } from "./productosServices.js";//
import Row from "react-bootstrap/Row";
//import { getProductos } from "../src/productosServices"

function Celulares (){
   const [data,setData]= useState(null);

   useEffect(()=>{
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares",{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer TU_ACCESS_TOKEN' 
       } }
    )
    .then((response)=> response.json())
    .then((data)=>{
      console.log(data)
      setData(data.results)
     
    })
    .catch(error => console.log("error", error))
  }, []);

   return (
    <div>
     <div>
       <br></br>
     <label>buscador</label>
     <br></br>  
    
     </div>
  <Row>  
{data.map((celus)=> (
 <Celus
 key={celus.id}
 id={celus.id}
 title={celus.data().title}
 price={celus.data().price}
 thumbnail={celus.data().thumbnail}
 />
))}
</Row>



     </div>
 )
 
   
  }export default Celulares





 ///////////////
/*
 const [ListaCelulares, setListaCelular]= useState([]);
 const [Loading, setLoading]= useState(true);
 const [buscar, setBuscar]=useState('celulares');
 

//con awiat hacemos que siga corriendo JS aunque todavía no esten
//listos los datos
// APi https://api.mercadolibre.com/sites/MLA/search?q=iphone "#json" o sin este en http renderiza lo mismo

useEffect(()=>{
     const request = async()=>{
     try{

       const response = await getProductosbyId();
       setListaCelular(response.docs)
     setLoading(false);
     } catch (error){
       console.log(error);
     }
};
request();
   }, [buscar])


   

   const handleBuscar = (event) => {
     const { value } = event.target ;
     setBuscar(value);
   }

if(Loading){
   return <div>cargando...</div>
 }else{

   <input type="text" value={buscar} onChange={handleBuscar}></input>//
 return(
   <div>
     <div>
       <br></br>
     <label>buscador</label>
     <br></br>  
    
     </div>
  <Row>  
{ListaCelulares.map((celus)=> (
 <Celus
 key={celus.id}
 id={celus.id}
 title={celus.data().title}
 price={celus.data().price}
 thumbnail={celus.data().thumbnail}
 />
))}
</Row>



     </div>
 )

}}




export default Celulares*/


//</div>button onClick={handleClick}>cambiar producto</button>//
