
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    let car = texte.substr(0,9);
    return car;
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    let res1 = texte.replace(" ","");
    let res2 = res1.replace("jour ", "jour");
    return res2;
}
let IsString =  (texte) => {
    if (typeof texte==="string"){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    let extension = texte.substr(texte.lastIndexOf('.')+1);
    return extension;
}
let NombreEspaceString =  (texte) => {
    let count = (texte.split(" ").length -1);
    return count;
}
let InverseString =  (texte) => {
    let invertedTxt = "";
    for (let i=texte.length -1; i>=0; i--){
        invertedTxt += texte[i];
    }
    return invertedTxt;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    let calc = x**y;
    return calc;
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let arrayAbs = array.map(Math.abs);
    return arrayAbs;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.PI*(rayon**2);
    return Math.round(surface);
}
let hypothenuse =  (ab, ac) => {
    let bc = (ab**2+ac**2)**(1/2);
    return bc;
}
let calculIMC =  (poids, taille) => {
    let imc = poids/(taille*taille);
    return Number(imc.toFixed(2));
}
