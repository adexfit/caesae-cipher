let myDict = {" ": " ", "!": "!", "?": "?", ".": ".",A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"};

function rot13(str) {
    let a = str.slice(" ");
    let changed = '';
    for(let i =0; i<a.length; i++){
        changed+=(myDict[a[i]]); 
    }
    console.log(changed);
    return changed;
}

rot13("SERR PBQR PNZC");