import validator from './validator.js'
//creando variables
let creditCard= document.getElementById("creditNumber");
const validar= document.getElementById('btnValida'); 
const btnGood= document.getElementById("btnGood");
const btnWrong= document.getElementById("btnWrong");
const formulario= document.getElementById("formulario");
//funcion para evitar espacios vacíos y números. 
formulario.creditNumber.addEventListener('keyup', (e) => {
	let valorCreditNumber = e.target.value;
	formulario.creditNumber.value = valorCreditNumber
	// reemplaza espacios en blanco
	.replace(/\s/g, '')
	// reemplaza las letras
	.replace(/\D/g, '')
     
})
//función de secciones con respecto a validación de tarjeta isValid
function mostrarOcultar(){
     if(creditCard.value===""|| creditCard.value.length<16){
          document.getElementById('message').innerText= '¡Por Favor ingresa todo el número de tu tarjeta!';
     } else{
          let maskify= validator.maskify(creditCard.value);
     
          if(validator.isValid(creditCard.value)===true){
          document.getElementById('contenedor').style.display='none';
          document.getElementById('correctValidation').style.display='block';
          document.getElementById('maskifyNumber').innerText= maskify;
          
     }else{
          document.getElementById('contenedor').style.display='none';
          document.getElementById('wrongvalidation').style.display='block';
          document.getElementById('maskifyNumber_').innerText= maskify;
       }
     }   
} 
//llamando al click
validar.addEventListener("click", mostrarOcultar);

function botonesVolver1 (){
     location.href='https://www.discovertheworld.com/';  
} 

btnGood.addEventListener("click", botonesVolver1);


function botonesVolver2 (){
     document.getElementById('wrongvalidation').style.display='none';
     document.getElementById('contenedor').style.display='block';  
     formulario.reset();
} 

btnWrong.addEventListener("click", botonesVolver2);