function feuTricolore1(couleur){
    if (couleur === 'rouge'){
        console.log("Arrête-toi");  
    }
    else if (couleur === 'orange'){
        console.log("Presque !");
    }
    else if (couleur === 'vert'){
        console.log("Tu peux passer");
    }
    else {
        console.log("Couleur inconnue");
    }
}

function feuTricolore2(couleur){
    switch (couleur) {
        case 'vert' : 
        console.log("Tu peux passer");
        break;
        case 'orange' : 
        console.log("Presque !");
        break;
        case 'rouge' : 
        console.log("Arrête-toi");
        break;
       default : 
       console.log("Couleur inconnue");
    }
}

// test

let couleur = "orange";
feuTricolore1(couleur);
feuTricolore2(couleur);