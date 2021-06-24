import validator from './validator.js'
//console.log(validator);
let creditCard= document.getElementById("creditNumber");
const validar= document.getElementById('btnValida'); 
let btnVolver= document.getElementById("volver");
 const formulario= document.getElementById("formulario");
formulario.creditNumber.addEventListener('keyup', (e) => {
	let valorCreditNumber = e.target.value;

	formulario.creditNumber.value = valorCreditNumber
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	//.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
})
    function mostrarOcultar(){
        console.log(creditCard.value);
     if(validator.isValid(creditCard.value)==true){
          document.getElementById('contenedor').style.display='none';
          document.getElementById('correctValidation').style.display='block';
     }else{
          document.getElementById('contenedor').style.display='none';
          document.getElementById('wrongvalidation').style.display='block';
          }
     }
     validar.addEventListener("click", mostrarOcultar);

function volver (){
     if(document.getElementById("correctValidation")){
          document.getElementById("correctValidation").style.display="none";
          document.getElementById("contenedor").style.display="block";
     }else{
          document.getElementById("correctValidation").style.display="none";
          document.getElementById("contenedor").style.display="block";
     }
     
}

btnVolver.addEventListener("click", volver);