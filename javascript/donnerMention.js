function donnerMention(note){
    if (note >=16){
        console.log("Très Bien !");
    }
    else if (note >=14){
        console.log("Bien !");
    }
    else if (note >=10){
        console.log("Passable");
    }
    else {
        console.log("Ajourné");
    }
}

// test 

let note = 16;
donnerMention(note);