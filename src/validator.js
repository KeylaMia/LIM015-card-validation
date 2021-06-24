const validator= {
  
  isValid: function(creditCard){
    console.log(typeof creditCard);
    let creditNumber= creditCard.split("");
    let invertirCreditNumber = creditNumber.reverse();

    let suma=0;
  
    for(let i = 0; i<invertirCreditNumber.length;i++){
      //para las posiciones pares
      let numInverter= parseInt(invertirCreditNumber[i]);
     
      if(i%2!=0){
        numInverter=numInverter*2;
        
        if(numInverter>9){
          numInverter= numInverter-9;
           //menos 9
        }else{
          numInverter=parseInt(numInverter);
          
        }
      } else{ 
        numInverter;
        console.log(numInverter);
    
      }
      suma=suma+numInverter;

    }

  return (suma%10==0);
    
},

  maskify: function (creditCard){
    
    let michi="";

    for (let i = 0; i <creditCard.length; i++ ){
      if(i<creditCard.length-4){
        michi = michi + "#";
      } else{
        michi = michi+ creditCard[i];
      }
  
     }

     return michi;
  }
}


export default validator;
