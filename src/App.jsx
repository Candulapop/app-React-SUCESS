 
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Celulares from "./Celulares";
import DetalleCel from "./DetalleCel.jsx";
import Login from "./Login.jsx";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Celus from "./Celus.jsx";
import FooterCompo from "./footer.jsx";
import Notfound from "./Notfound.jsx";
import Productos from "./Productos.jsx";
import Container from 'react-bootstrap/Container';
import ProductosAlta from "./ProductosAlta.jsx";
import ProductosListado from "./assets/ProductosListado.jsx";

function App() {
 

  return (
    
      <div>
      <Router>
       
        <NavBar />
         <Routes>

          
            <Route path="/" element={<Home />}/>
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/Celulares" element={<Celulares />}/>
            <Route path="/Celus" element={<Celus />}/>
            <Route path="/DetalleCel/:id" element={<DetalleCel />}/>
            <Route path="*" element={<Notfound />}/>
            <Route path="/ProductosAlta" element={<ProductosAlta />}/>
            <Route path="/ProductosListado" element={<ProductosListado />}/>
            

         </Routes>
    
   <Container>
    
   </Container>
      <Login />
      <FooterCompo />
      </Router>

    </div>
  )  
}

export default App;
