import React from 'react'

export const validarForm=(formu)=>{
      
    let error={};
    let regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regTelefono=/^[0-9]+$/;
    let regComent = /^.{1,255}$/;
   
    if (!formu.name.trim()){
        error.name="El campo 'nombre' es necesario";
    } else if (!regName.test(formu.name.trim())){
        error.name="El campo 'Nombre'solo acepta letras y espacios en blanco";
    }
 
    if (!formu.email.trim()){
     error.email="El campo 'Email' es necesario"
 } else if(!regEmail.test(formu.email.trim())){
     error.email="El campo 'Email'es incorrecto"
 }

 if (!formu.confEmail.trim()){
  error.confEmail="El campo 'Email' es necesario"
} else if(!regEmail.test(formu.confEmail.trim())){
  error.confEmail="El campo 'Email'es incorrecto"
} else if (formu.email !== formu.confEmail){
error.confEmail="El 'Email' no coincide"
}

 
 
if (!formu.telefono.trim()){
error.telefono="El campo 'Teléfono' es necesario"
} else if(!regTelefono.test(formu.telefono.trim())){
error.telefono="El campo 'Teléfono' es incorrecto"
}
 
 if(!regComent.test(formu.coment.trim())){
     error.coment="El campo 'Comentario' no debe exeder los 255 caracteres"
  }
 
 
    return error
 }

