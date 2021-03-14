/*-------------- liens _js --------------*/
// Variables
import {} from "./_variables.js";
// Function
import {} from "./_function.js";
// Class
import {} from "./_class.js";
/*----------------- Main.js ------------------------*/
// Condition
let marc = {
    nom: "marc",
    age: 19
}

if (marc.age >= 18 && marc.age < 25){
    console.log(`${marc.nom} bravo majeur`);
} else if(marc.age >= 25 && marc.age < 50){
    console.log(`${marc.nom} bravo un quart de siecle`);
} else if(marc.age >= 50){
    console.log(`${marc.nom} bravo un demi siecle`);
}else{
    console.log(`${marc.nom} bravo mineur`);
}

// Condition  Methode ternaire
console.log (marc.age >= 50 ? `${marc.nom} bravo un demi siecle` : marc.age >= 25 ? `${marc.nom} bravo un quart de siecle` : marc.age >= 18 ? `${marc.nom} bravo majeur` : `${marc.nom} bravo mineur`)
/*------------------------------------------- FIN -----------------------------------*/
// Boucles
let i = 0
while (i < 10) {
    console.log(i);
    if (i == 3){
        break
    }
    i++
}
for (let j = 0; j < 11; j++){
    console.log(j);
}

let eleves = ["Jean", "Marc", "Marion", "Charles"]
for (let i = 0; i < eleves.length; i++) {
    console.log(`Bonjour ${eleves[i]}`);
}
let elevesInverse = ["Jean", "Marc", "Marion", "Charles"]
for (let i = elevesInverse.length - 1; i>=0;  i--) {
    console.log(`Bonjour ${elevesInverse[i]}`);
}
/*------------------------------------------- FIN --------------------------------------*/
// Fonctions
//VR1
const message = function(/* parametre */){
    let texte = "bonjour"
    console.log(texte)
}
message()
// console.log de texte ne marche pas en dehors de la fonction

//VR2
const note = (a, b) => {
    console.log(`fonction flechée ${a+b}`);
}
note(10, 2)
// Attention avec cette méthodes au HOISTING
/*------------------------------------------- FIN -----------------------------------*/
// Prototypes
// En Cours de compréhension

/*------------------------------------------- FIN ------------------------------------*/
// Window
/* 
let demoA = alert("Bonjour")
let demoB = prompt("Comment vas tu?")
let demoC = confirm("Es-tu majeur?")

console.log(demoA,demoB, demoC);
*/
// Exo
/* 
let deviner = Math.round(Math.random() * 10)
let essai = parseInt( prompt ("Entrez un chifre")) 
while (essai != deviner) {
    if (essai > deviner) {
        alert ("c'est en dessous")
    }else{
        alert ("c'est au dessus")
        //console.log(String.fromCharCode(demoB.keyCode)) permet de savoir quel touche on été rentré dans un input
    }
    essai = prompt ("retentez votre chance")
}
alert("bravo")
 */
/*------------------------------------------- FIN -------------------------------------*/
// Dom
let a = document.querySelector(".demo p")
console.log(a.textContent);
console.log(a.innerHTML);
a.style.color = "blue"
a.classList.remove("blue") // revoir les classList

let ul = document.querySelector(".demo ul")
console.log(ul.children);
console.log(ul.childElementCount);
console.log(ul.firstChild);
console.log(ul.firstElementChild);

let li = ul.querySelector(".demo li:nth-child(4)")
console.log(li);
console.log(li.nextElementSibling);
console.log(li.previousElementSibling.previousElementSibling);
console.log(li.parentNode);
console.log(li.parentElement.children);

let ul2 = ul.cloneNode()
console.log(ul2.children);

/*------------------------------------------- FIN --------------------------------------*/
// Evenements
let liens = document.querySelectorAll("a.external")
for(let i = 0; i < liens.length; i++){
    let lien = liens[i]
    lien.addEventListener('click', function (e){
        console.log("j'ai cliqué sur le lien", e);
        let rep = confirm('Voulez vous quittez la page?')
        if (rep === false){
            e.preventDefault()
        }
    })
}
// Form
document.querySelector("#form").addEventListener("submit", function(e){
    let mention = document.querySelector("#mention")
    if (!mention.checked /* === false */) {
        alert("vous n'avez pas accepter")
        e.preventDefault()
    }
})
/*------------------------------------------- FIN ------------------------------------*/
