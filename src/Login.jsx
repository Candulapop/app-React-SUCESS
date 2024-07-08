
//{UseNavigate} sirve cuando por eje queremos ir de la "pag" Home a Detalle
import { useForm } from "react-hook-form";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { autenticate } from "./assets/authServices"

function Login (){

 const onSubmit = async (data) => {
    try{
      console.log(data);
      const responseUser = await autenticate(data.email, data.password);
      console.log(responseUser)

    }catch(e){
     console.log(e)
    }

    
 };


const 
{register, 
handleSubmit,
formState: {errors},
 } = useForm({ mode: "onChange"}); 
return(
    <>
          <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pon tu e-mail aquí</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        {...register("email",
         {required:true,
        })}
           />
       {errors?.correo?.type === "required" &&(
      <Form.Text className="text-danger">
        *CAMPO OBLIGATORIO*
      </Form.Text>
       )}
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>pon tu contra</Form.Label>
        <Form.Control type="password" placeholder="Password"
        {...register("password",
        {required:true,
        minLength:3,
        maxLength:7})}
        />
        {errors?.clave?.type === "required" && (
            <Form.Text className="text-muted">
                *El campito es OBLIGATORIO
            </Form.Text>
        )}


{errors?.password?.type==='required' && (<span>el campo OBLIGATORIO</span>)}
 {errors?.password?.type==='minLength' && <p>MIN 3 LETTERS</p>}
 {errors?.password?.type==='maxLength' && <span>MAX 7 LETTERS</span>}

</Form.Group>


      <Button variant="primary" type="submit">
        inicio de sesion
      </Button>
    </Form>


</>
)


} export default Login