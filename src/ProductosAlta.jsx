import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { create } from "./productosServices"
  
function ProductosAlta () {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm ({ node:"onChange" });
      const onSubmit = async (data) => {
        try{
         
        const document = await create(data)
        console.log(document)

        }catch(e){
            console.log(e); 
        }
      };

return (

<div>
<h1>crea tu producto</h1>

<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group className="mb3" controlId="forNombre">
<Form.Label>Nombre</Form.Label>
<Form.Control
   type="text"
   placeholder="nombre del producto"
   {...register("title", {required:true})}
   />
  {errors & errors?.nombre && (
    <Form.Text className="text-danger">
        campo Obligatorio
    </Form.Text>
  )}
</Form.Group>


<Form.Group className="mb-3" controlId="formPrecio">
    <Form.Label>Precio</Form.Label>
    <Form.Control
        type="text"
        placeholder="ingrece precio producto"
        {...register("price")}
    />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicImagen">
  <Form.Label>imagen</Form.Label>
  <Form.Control
    type="text"
    placeholder="ingrese URL image"
    {...register("thumbnail", {
        required:true,
    })}
  />
</Form.Group>

<Button variant="primary" type="submit">
guardar
</Button>

</Form>



</div>


)



} export default ProductosAlta