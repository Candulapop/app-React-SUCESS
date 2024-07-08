import Registro from "./Registro.JSX";
import Productos from "./Productos";
import firebase from "./Config/firebase.js"


function Home(){
  console.log(firebase)
    return (
      <div>
     <h1>COMPO HOME</h1>

   <Productos />
   
      <Registro />
     
     
         
      </div>


    );
}

export default Home;