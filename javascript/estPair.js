function estPair(nbr){
    if (nbr % 2 == 0){
        console.log(true);
        
    }
    else {
       console.log(false);
       
    }
    for (let i = 0; i <= 10; i++){
        if (i % 2 == 0 ){
            console.log( "> " + i + " est pair"); 
        }
        else {
            console.log( "> " + i + " est impair");
        }
    }
}

let nbr = 5;
estPair(nbr);