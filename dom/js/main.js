






const input2 = document.getElementById("input4");
 const btn = document.getElementById("miBoton2");
 input4.onchange= ()=> btn.disabled=false;
 
 btn.addEventListener("click", ()=>{
     validarFormulario();

 });




 function validarFormulario()
 {
     const nombre = document.getElementById("input1");
     const apellido = document.getElementById("input2");
     const ciudad = document.getElementById("input3");
     const provincia = document.getElementById("input4");

           if(nombre.value.trim()!=="" && apellido.value.trim()!=="" && ciudad.value.trim()!=="" && provincia.value.trim()!=="")
           {
               alert("Ingrese Uduario y Contraseña")
                let username = prompt("Ingrese su Usuario ");
                let pwd = prompt("Ingrese su Password");
                if(nombre.value.trim()=="Fabio" && apellido.value.trim()=="Duarte" && username=="effe" && pwd=="123456789")
            {
                alert(`Bienvenido/a ${nombre.value.trim()} ${apellido.value.trim()} de la ciudad de ${ciudad.value.trim()}, provincia de ${provincia.value.trim()}  `);
                loginExitoso=true; 

            }

            else 
            { 
              alert("Ah ingresado datos erroneos")
             }

     }
     else
     {
         alert("Vuelva a ingresar")
     }


 }







