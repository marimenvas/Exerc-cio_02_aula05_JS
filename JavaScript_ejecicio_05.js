var n1 = prompt("¿Qual é seu nome, usuário 1?");
var n2 = prompt("¿Qual é seu sobrenome, usuário 1?");
var n3 = Number(prompt("¿Qual é sua edade, usuário 1?"));
var n4 = prompt("Qual é seu género: feminino, masculino, outro, usuário 1");
var nn1 = prompt("¿Qual é seu nome, usúario2?");
var nn2 = prompt("¿Qual é seu sobrenome, usuário 2?");
var nn3 = Number(prompt("¿Qual é sua edade, usuário 2?"));
var nn4 = prompt("Qual é seu género: feminino, masculino, outro, usuário 2");

if( n4 == "feminino"){

    document .write ("Ben-vinda"+ " " + n1 + " "+ n2 + " de " + n3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuária 1");
    document .write ("<br>");
    document .write ("<br>");
}

else if( n4 == "masculino"){

    document .write ("Ben-vindo"+ " " + n1 + " "+ n2 + " de " + n3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuário 1");
    document .write ("<br>");
    document .write ("<br>");
}

else if( n4 == "outro"){

    document .write ("Ben-vindex"+ " " + n1 + " "+ n2 + " de " + n3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuárex 1");
    document .write ("<br>");
    document .write ("<br>");   
}

else if( n4 == " "){

    document .write ("Ben-vindo"+ " " + n1 + " "+ n2 + n3+ " "+ "usuário 1");
    document .write ("<br>");
    document .write ("<br>");   
}

if( nn4 == "feminino"){

    document .write ("Ben-vinda"+ " " + nn1 + " "+ nn2 + " de " + nn3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuária 2");
    document .write ("<br>");
    document .write ("<br>");
}
    
else if( nn4 == "masculino"){
    
    document .write ("Benvindo"+ " " + nn1 + " "+ nn2 + " de " +nn3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuário 2");
    document .write ("<br>");
    document .write ("<br>");   
}
    
else if( nn4 == "outro"){
    
    document .write ("Benvindex"+ " " + nn1 + " "+nn2 + " de " + nn3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ " "+ "usuáriex 2");
    document .write ("<br>");
    document .write ("<br>");       
}
    
else if( nn4 == ""){
    
    document .write ("Benvindo"+ " " + nn1 + " "+ nn2 + nn3+ " "+ "usuário 2");
    document .write ("<br>");       
}   document .write ("<br>");


console.table(
    {
        firstName:'nela',
        lastName:'mendez',
        edade:'49'
    }
);

if( n3 == nn3){

    document .write ("¡Parabens têm a mesma edade!" );
    
}
    
else if( n3 < nn3){
    
    document .write ("¡Parabens" + " "+ n1+" "+ " você é mais jovem que"+" "+nn1 +"!");
        
}
    
else if( n3 > nn3){
    
    document .write ("¡Parabens" + " "+ nn1+" "+ " você é mais jovem que"+" "+n1+"!");
            
}
    
  


