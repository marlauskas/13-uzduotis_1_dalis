/*
PIRMA UŽDUOTIS
Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

"Įveskite prekės kainą";
"Ar reikalingas pristatymas į namus? (taip/ne)";
"Į kurį miestą reiks pristatyti?"

Galiausiai atspausdintų tokią informaciją:

---
1 variantas (be pristatymo)

Prekės kaina: xx.xx €
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


---
2 variantas (su pristatymu)

Prekės kaina : xx.xx €
Pristatymas: xx.xx €
Iš viso: xx.xx €
Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
*/

var tikrinam = 0

do {
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
    if(kaina != 0){
       pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)")
    } else if (tikrinam == true)
        miestas = prompt("Į kurį miestą reiks pristatyti?")
    
} while(isNaN(kaina) || kaina <= 0)