// var number=prompt('Enter your number here');
// var isPrime = false;
// if(number == 1){
//     document.write(`${number} is neither a prime nor composite`)
//     // process.exit();
// }
// else if(number < 1){
//     document.write(`${number} is not a prime number`)
//     // process.exit();
// }
    
// for(var i=2 ;i<number;++i){                                   
//  if(number % i !== 0){
//    isPrime = true;
//      break;
//     }           
//  }
//  let printNotLogic = isPrime ? "" : "not";
//  if(number !=1 && number > 1){
//     document.write(`${number} is ${printNotLogic} a prime number`);

//  }


    var number=prompt('Enter your number here');
    if(number == 1){
        document.write(`${number} is not a prime number`);
    }
    else if (number < 1){
        document.write(`${number} is not a prime number`);
    } 
    else{
        for (var i= 2 ; i < number;i++) //LOGIC:Run a loop from 2 to given number
    {
        if (number % i == 0 ){
        document.write(`${number} is not a prime number`);
    break;
} //LOGIC:if remainder is zero it will not be prime
    else{
        document.write(`${number}is a prime number`)
    }
 }
}
