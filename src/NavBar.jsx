import { Link } from "react-router-dom";
import {Nav, Navbar,NavDropdown} from "react-bootstrap";



const styleNav = {
     NavBar:{
      color:"green",
      
     }
}

//se aplica estilos al primer elem, en este caso Navbar//

function NavBar (){
return(
    <>

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      

        <Navbar.Brand as={Link} to={"/"} style={styleNav.NavBar}>SUCCES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to={"/"}>inicio</Nav.Link>
            
         

            <Nav.Link as={Link}  to={"/Celulares"}>Celulares</Nav.Link>
            
            
          
            <NavDropdown title="ProductosAlta" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to={"ProductosAlta"}>Alta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"ProductosListado"}>Listado</NavDropdown.Item>


            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>



</>

    
)
}export default NavBar