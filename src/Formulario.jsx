import { appendErrors, useForm } from "react-hook-form";

const Formulario = ({setPaso}) => {
    
    const { register, formState: { errors } , handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        setPaso(2);
    }
    return (
    <div id="formulario" className="formulario">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="Nombre y apellido" {...register('Nombre y apellido', {
                    required: true
                } )} />
                {errors.nombre?.type === "required" && <p> Introduzca su nombre y apellido </p>}
            </div>
            <div>
                <input type="text" placeholder="DNI" {...register('DNI', {
                    required: true
                })} />
                {errors.nombre?.type === "required" && <p> Introduzca su DNI </p>}
            </div>
            <div>
                <input type="text" placeholder="Crea una contraseña" {...register('Crea una contraseña', {
                    required: true
                })}/>
                {errors.nombre?.type === "required" && <p> Introduzca una Contraseña </p>}
            </div>
            <div>
                <input type="text" placeholder="Repetir la contraseña" {...register('Reptetir la contraseña', {
                    required: true
                })} />
                {errors.nombre?.type === "required" && <p> Vuelva a escribir la Contraseña </p>}
            </div>
            <button type="submit" id="boton"> Próximo paso </button>
        </form>
    </div>
    )
}

export default Formulario;