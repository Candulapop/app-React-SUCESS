
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

const styles = {
    card: { marginBotton: "40px", marginTop: "40px"}
    //para poner mas de una propiedad de estilos, se pone, otra prop
}

function Celus({ title, price,id, thumbnail}){
   
   /*
   
   se le debe pasar el id para posteriormente ser capturado por el hook useParams en el componente
   DetalleCel.
   */


return(
<Col xs={10} sm={5} ls={3} xxl={3}>
    <Card style={styles.card}>
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      ${price}
      </Card.Text>
      <Button as={Link} to={`/DetalleCel/${id}`} variant="primary">VER DETALLE</Button>
    </Card.Body>
  </Card>
</Col>

   
)
}

export default Celus


