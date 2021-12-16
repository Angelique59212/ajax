//Lecture d'un fichier Json
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "DATA/data.json");
xhr2.responseType = "json";

xhr2.onload = function () {
    if (xhr2.status !== 200) {
        return;
    }
    let response = xhr2.response;
    console.log(response);
    let utilisateur = response.utilisateur;
    alert("Hello " + utilisateur.prenom + " " + utilisateur.nom);
}
xhr2.send();
