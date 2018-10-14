"use strict";

var naam = document.getElementById("naam");
var klas = document.getElementById("klas");

var click_event = document.getElementById("click_event");
var opdracht_titel = document.getElementById("opdracht_titel");
var opdracht = document.getElementById("opdracht");
var uitwerking = document.getElementById("uitwerking");

naam.innerHTML = "Valerie";
klas.innerHTML = "MD2B";


click_event.addEventListener("click", instruction3);

function instruction3(){
	opdracht_titel.innerHTML = "Click event";
	opdracht.innerHTML = "Door op link Click event te klikken wordt de content aangepast";
	uitwerking.innerHTML = " ";
}
