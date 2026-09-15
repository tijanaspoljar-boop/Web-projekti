function povecaj(slika) {
slika.style.width = "280px";
slika.style.height = "200px";
}

function smanji(slika) {
slika.style.width = "250px";
slika.style.height = "180px";
}

function zamijeni() {
document.getElementById("slikaSwap").src = "slika4.jpg";
}

function vrati() {
document.getElementById("slikaSwap").src = "slika2.jpg";
}