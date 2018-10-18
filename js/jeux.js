
var rbois = document.getElementById('bois');
var rargile = document.getElementById('argile');
var rfer = document.getElementById('fer');
var rcéreale = document.getElementById('céreale');

var rbatiment_principal =document.getElementById('bp');
var rbp = document.getElementById('BP');

var rdepot_principal = document.getElementById('dpt');
var rdp = document.getElementById('DEPOT');

var rsilo_principal = document.getElementById('sl');
var rsl = document.getElementById('SILO');

var BOIS = 0;
var ARGILE = 0;
var FER = 0;
var CÉREALE = 0;

var timerBois = 0;
var timerArgile = 0;
var timerFer = 0;
var timerCéreale = 0;

var BATIMENT_PRINCIPAL = 1;
var BATIMENT_LEVEL = 1;

var DEPOT_PRINCIPAL = 0;
var DEPOT_LEVEL = 0;
var DEPOT_VALEUR = 800;

var SILO_PRINCIPAL = 0;
var SILO_LEVEL = 0;
var SILO_VALEUR = 800;

var SILO = 0;

var multiply = 1;
var multiplyDepot = 2;
var multiplySilo = 2;

var Population = 2;


function bois() {
    if (timerBois && (BOIS >= DEPOT_VALEUR)) {
        clearTimeout(timerBois);
        timerBois = setTimeout(function(){
        rbois.innerHTML = BOIS;
    bois();
},0);
    }
timerBois = setTimeout(function(){
    BOIS++;
        rbois.innerHTML = BOIS;
    bois();
},1);
}


function argile() {
    if (timerArgile && (ARGILE >= DEPOT_VALEUR)) {
        clearTimeout(timerArgile);
        timerArgile = setTimeout(function(){
        rargile.innerHTML = ARGILE;
    argile();
},0);
    }
timerArgile = setTimeout(function(){
    ARGILE++;
        rargile.innerHTML = ARGILE;
    argile();
},1);
}

function fer() {
    if (timerFer && (FER >= DEPOT_VALEUR)) {
        clearTimeout(timerFer);
        timerFer = setTimeout(function(){
        rfer.innerHTML = FER;
    fer();
},1);
    }
timerFer = setTimeout(function(){
    FER++;
        rfer.innerHTML = FER;
    fer();
},1);
}

function céreale() {
    if (timerCéreale && (CÉREALE >= SILO_VALEUR)) {
        clearTimeout(timerCéreale);
        timerCéreale = setTimeout(function(){
        rcéreale.innerHTML = CÉREALE;
    céreale();
},0);
    }
timerCéreale = setTimeout(function(){
    CÉREALE++;
        rcéreale.innerHTML = CÉREALE;
    céreale();
},1);
}


function BatimentPrincipal(){

    if(BOIS >= (200 * multiply) && ARGILE >= (160 * multiply) && FER >= (140 * multiply) && CÉREALE >= (80 * multiply) && (BATIMENT_PRINCIPAL == BATIMENT_LEVEL)){ 
        //console.log("ca marche")
        BATIMENT_PRINCIPAL++;
        BATIMENT_LEVEL++;

        BOIS = BOIS - (200 * multiply);
        ARGILE = ARGILE-(160 * multiply);
        FER = FER-(140 * multiply);
        CÉREALE = CÉREALE-(80 * multiply);
        //console.log(BATIMENT_PRINCIPAL);
        rbp.innerHTML = BATIMENT_PRINCIPAL;
        multiply++
        Population = Population+7;
        console.log('Ta population est de',Population);

    }
}


function DepotPrincipal(){
        if(BOIS >= (100 * multiplyDepot) && ARGILE >= (120 * multiplyDepot) && FER >= (80 * multiplyDepot) && CÉREALE >= (50 * multiplyDepot) && (DEPOT_PRINCIPAL == DEPOT_LEVEL)){ 
            DEPOT_PRINCIPAL++;
            DEPOT_LEVEL++;

            BOIS = BOIS - (100 * multiplyDepot);
            ARGILE = ARGILE-(120 * multiplyDepot);
            FER = FER-(80 * multiplyDepot);
            CÉREALE = CÉREALE-(50 * multiplyDepot);

            rdp.innerHTML = DEPOT_PRINCIPAL;
            multiplyDepot++;
            DEPOT_VALEUR = DEPOT_VALEUR +(DEPOT_VALEUR*(25/100));
            console.log(DEPOT_VALEUR);
            Population = Population+4;
            console.log('Le niveau de dépôt est de',DEPOT_LEVEL)
            console.log('Ta population est de',Population);
            

        }
}


function SiloPrincipal(){
        if(BOIS >= (110 * multiplySilo) && ARGILE >= (90 * multiplySilo) && FER >= (100 * multiplySilo) && CÉREALE >= (170 * multiplySilo) && (SILO_PRINCIPAL == SILO_LEVEL)){ 
            SILO_PRINCIPAL++;
            SILO_LEVEL++;

            BOIS = BOIS - (110 * multiplySilo);
            ARGILE = ARGILE-(90 * multiplySilo);
            FER = FER-(100 * multiplySilo);
            CÉREALE = CÉREALE-(170 * multiplySilo);

            rsl.innerHTML = SILO_PRINCIPAL;
            multiplySilo++;
            SILO_VALEUR = SILO_VALEUR +(SILO_VALEUR*(25/100));
            console.log(SILO_VALEUR);
            Population = Population+3;
            console.log('Le niveau de silo est de',SILO_LEVEL)
            console.log('Ta population est de',Population);

        }
}


/*function CaserneUp(){
    if(BOIS >= (200 * multiply) && ARGILE >= (160 * multiply) && FER >= (140 * multiply) && CÉREALE >= (80 * multiply) && (CASERNE == CASERNE_LEVEL)){
    CASERNE++;
    CASERNE_LEVEL++;

    BOIS = BOIS - (200 * multiply);
    ARGILE = ARGILE-(160 * multiply);
    FER = FER-(140 * multiply);
    CÉREALE = CÉREALE-(80 * multiply);
    //console.log(BATIMENT_PRINCIPAL);
    rc.innerHTML = CASERNE;
    multiply++      
}

*/


bois();
argile();
fer();
céreale();