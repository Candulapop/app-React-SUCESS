import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FooterCompo (){
    return (
        <>
      <h2> footer</h2>
      <br></br>
      
    
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button>
         <Button>2</Button> 
         <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
    </ButtonToolbar>
<br>
</br>


        </>
    )
} export default FooterCompo