let bezoeker = {
    voornaam:prompt("Voornaam"),
    achternaam:prompt("Achternaam"),
    email:prompt("Email"),
    leeftijd:prompt("Leeftijd"),
    woonplaats:prompt("Woonplaats"),
}
if (bezoeker.leeftijd==16) {
    document.querySelector("#container").style="Background-color:orange";
} else if (bezoeker.leeftijd==17) {
    document.querySelector("#container").style="Background-color:blue";
} else if (bezoeker.leeftijd==18) {
    document.querySelector("#container").style="Background-color:gold";
} else if (bezoeker.leeftijd==19) {
    document.querySelector("#container").style="Background-color:green";
} else {
    document.querySelector("#container").style="Background-color:pink";
}
let volNaam = (bezoeker.voornaam)
