const requestURL = "https://run.mocky.io/v3/c735a13f-b121-42c9-ae43-b4f7989b6b2b";
let xhr = new XMLHttpRequest();
xhr.open("GET",requestURL);
xhr.response.type = "json";

/**
 * Réponse serveur
 */
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("Ok")
        return;
    }
    //Requête réussi
    let response = xhr.response;
    console.log(response);
    let utilisateur = response.utilisateur;
    alert("Hello" + utilisateur.prenom + " " + utilisateur.nom);
}

/**
 * progression du téléchargement de la réponse
 * @param event
 */
xhr.onprogress = function (event) {
    if (event.lengthComputable) { // si peut être calculée
        let charge = event.loaded; // nbr d'octets téléchargés
        let total = event.total;
        console.log(charge / 1024 + "kilo octets (ko) reçus sur " + (total / 1024) + "ko");
    }
}
xhr.send();

