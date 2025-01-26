import React, {useRef} from "react";
import emailjs from "@emailjs/browser";


function Inferior() {
  const referencia = useRef<HTMLFormElement>(null);
  console.log(referencia);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const serviceId = "service_l0vd2wg";
    const templateId = "template_lgwv9di";
    const key = "tdOH5nanlWFdDNv8k";

    if (referencia.current) {
      emailjs.sendForm(serviceId, templateId, referencia.current, key)
        .then((result) => console.log(result.text))
        .catch((error) => console.error(error));
    } else {
      console.error("Form reference is null");
    }


  }
  
  return (
    <div>
        <div className="inferior"> 
          <div className="contenBloque">
            <div className="bloque">
              <img src="src\assets\img\usuario.jpg" alt="" className="imgUsuario" />
              <p className="comentario"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Vestibulum bibendum, massa vitae volutpat accumsan, ligula orci 
                   feugiat ipsum, id bibendum tellus erat vitae massa. </p>
            </div>
            <div className="bloque">
              <img src="src\assets\img\usuario.jpg" alt="" className="imgUsuario" />
              <p className="comentario"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Vestibulum bibendum, massa vitae volutpat accumsan, ligula orci 
                   feugiat ipsum, id bibendum tellus erat vitae massa. </p>
            </div>
            
            <div className="bloque">
              <img src="src\assets\img\usuario.jpg" alt="" className="imgUsuario" />
              <p className="comentario"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Vestibulum bibendum, massa vitae volutpat accumsan, ligula orci 
                   feugiat ipsum, id bibendum tellus erat vitae massa. </p>
            </div>
            
          </div>

          <div className="contenBloque">
            <form ref={referencia}  className="formulario" onSubmit={handleSubmit}> 
              <div className="newdiv">
                <label className="titulo" >
                     Nombre y Apellido 
                    <input name="Nombre" className="input" defaultValue="Camilo Darft" type="string" required/>
                </label>
              </div>
              
              <div className="newdiv">
                <label className="titulo" >
                    Correo
                    <input name="Correo" className="input" defaultValue="Camilo Darft@gmail.com" type="string"/> 
                </label>
              </div>
              <button className="boton" type="submit">
                Enviar
              </button>
            </form>
          </div>

        </div>
      
    </div>
  )
}

export default Inferior
