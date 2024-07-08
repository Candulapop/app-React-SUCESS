import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { create } from "./authServices"

function Registro() {

const onSubmit = async (data) => {
  try{

const responseUser = await create(data);
console.log(responseUser)
}catch (e){
console.log(e)
}
//es por si el usu no escribe bien el password y/o contra//
};

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({ node: "onChange"})

  
return(

    <>


<legend>
        <h2 >¡REGISTRATE!</h2>
</legend>

<br></br>



<Form  onSubmit={handleSubmit(onSubmit)}>



      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Pon tu nombre</Form.Label>
        <Form.Control
        type="text"
        placeholder="Pon tu nombre"
        {...register("name")}
           />
      
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>pon tu ultino nombre</Form.Label>
        <Form.Control 
        type="text"
        placeholder="pon tu seguindo nombre"
        {...register("lastname")}
        />
</Form.Group>
    


<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>pon tu Mail</Form.Label>
        <Form.Control 
        type="email"
        placeholder="pon tu e-mail"
        {...register("email")}
        />
        
    


{errors?.correo?.type==='required' && (
    <Form.Text className="text-danger">
      *campo OBLIGATORIO*
    </Form.Text>
)}

</Form.Group>
 
 
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>pon tu Password</Form.Label>
        <Form.Control 
        type="password"
        placeholder="pon tu contraseña"
        {...register("password")}
        />







 {errors?.clave?.type==="required" && (
  <Form.Text className="text-danger">
campo OBLIGATORIO
  </Form.Text>
 )}
 
 </Form.Group>


      <Button variant="primary" type="submit">
        ¡REGISTRARSE!
      </Button>

    </Form>



</>

 





);
}
export default Registro