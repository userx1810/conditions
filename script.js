"use strict";

/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */
let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}





let nbr1=5;
let nbr2=8;
let nbr3="5";
if(nbr1==nbr3){//double egal egalité simple(valeur)
    alert("Egalité");
}


if(nbr1===nbr3){
    alert("Egalité Bis");//triple egal egalite stricte ( valeur+ type)
}else{alert("Je suis different");
}

if(nbr1 == 8){
    alert("je suis le 8");
}else if(nbr1==4)
{
    alert("je suis le chiffre 4");
}else {
    alert("je suis un autre chiffre");
    }

console.log(nbr1===nbr3)

//et &&
if(nbr1==5 && nbr2 ==8){
    alert("je suis trop fort");
 }else{
    alert('NOOB');
 }

 // ou || test une valeur ou l'autre

 if(nbr1==5 || nbr2 ==5){
    alert("je suis trop fort");
 }else{
    alert('NOOB');
 }




//switch

switch(2){
 case 1:
         alert("je suis le chiffre 1");
   break;
 case 2:
        alert("je suis le chiffre 2");
        break;
 case 3:
          alert("je suis le chiffre3");
    break;//tres important ne pas oublier
 case 4:
         alert("je suis le chiffre 4");
    break;
 case 5:
         alert("je suis le chiffre5");
    break;
    default:
        alert('je suis un autre chiffre');
}





