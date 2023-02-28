const http = require('http');
// const { request } = require('https');
//import du module
const querystring = require('querystring');


// La fonction gestion de requêtes
const server = http.createServer((req, res) => {
//   console.log('Requète HTTP reçue!')
if (req.url === "/") {
    if (req.method === "/") {
        res.end("Requete GET recu sur /samy");
        return; 
    }
    
}

if (req.url === "/samy") {
    res.end("Requete recu sur /samy");
    return;
}

if (req.url === "/samy") {
    if (req.method === "GET") {
        res.end("Requete recu GET sur /samy");
        return;
    }
}
if (req.method === "POST") {
    res.end("Requete recu POST sur /samy");
    return;
}

if (req.url.includes("/user")) {
    if (req.method === "GET") {
        // console.log(req);
        // res.end("Requete recu sur /user");
        // user?prenom=sam => prenom=sam
        const data = req.url.split("?")[1];

        //Prend une chaine de caractère et retourne un objet
        const user = querystring.parse(data);
        res.end(`Bonjour ${user.prenom}`);
        return;
    }    
}
// if (req.url.includes("/double")) {
//     if (req.method === "GET") {
//         // (/double?number=3) = adresse de l'url
//         const num = req.url.split("?")[1];
//         const number = querystring.parse(num);
//         res.end(`Le double de ce nombre est : ${number.number*2}`);// La constante + la clé détenue dans num (ici c'est number)
//     }
// }
if (req.url.includes("/double")) {
    if (req.method === "GET") {
        // /double?number=5
        const { number } = querystring.parse(req.url.split("?")[1]);
        res.end(`Le double du nombre est ${number * 2}`);
    }
}

if (req.url.includes("/add")) {
    if (req.method === "GET") {
        ///add?num1=2&num2=10
        const numberString = req.url.split("?")[1];
        const addition = querystring.parse(numberString);
        res.end(`L'addition pour ces deux nombres sont : ${Number (addition.num1) + Number (addition.num2)}`);//Ajouter l'option "Number" pour transformer la chaîne de caractère en nombre
    }
}


});

server.listen(8000);

//Exercice:
//Vous allez créer une route GET: /double
//Vous recevez un paramètre number
//Retounez dans la reponse le double de number

//Exercice:
//Vous allez créer une route GET: /add?num1=2&num2=10
//Vous recevez deux parametres: num1 et num2
//Retournez dans la reponse l'addition de num1 et num2