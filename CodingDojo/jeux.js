
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
},10);
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
},10);
}

function fer() {
    if (timerFer && (FER >= DEPOT_VALEUR)) {
        clearTimeout(timerFer);
        timerFer = setTimeout(function(){
        rfer.innerHTML = FER;
    fer();
},0);
    }
timerFer = setTimeout(function(){
    FER++;
        rfer.innerHTML = FER;
    fer();
},10);
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
},10);
}



function BatimentPrincipal(){
    
    if(BOIS >= (100 * multiply) && ARGILE >= 100 && FER >= 80 && CÉREALE >= 50 && (BATIMENT_PRINCIPAL == BATIMENT_LEVEL)){ 
        //console.log("ca marche")
        BATIMENT_PRINCIPAL++;
        BATIMENT_LEVEL++;

        BOIS = BOIS - (100 * multiply);
        ARGILE = ARGILE-(100 * multiply);
        FER = FER-(100 * multiply);
        CÉREALE = CÉREALE-(100 * multiply);
        //console.log(BATIMENT_PRINCIPAL);
        rbp.innerHTML = BATIMENT_PRINCIPAL;
        multiply++
        Population = Population+7;
        console.log('Ta population est de',Population);


    }
}


function DepotPrincipal(){
        if(BOIS >= (100 * multiply) && ARGILE >= 100 && FER >= 80 && CÉREALE >= 50 && (DEPOT_PRINCIPAL == DEPOT_LEVEL)){ 
            DEPOT_PRINCIPAL++;
            DEPOT_LEVEL++;

            BOIS = BOIS - (100 * multiply);
            ARGILE = ARGILE-(100 * multiply);
            FER = FER-(100 * multiply);
            CÉREALE = CÉREALE-(100 * multiply);

            rdp.innerHTML = DEPOT_PRINCIPAL;
            multiplyDepot++;
            DEPOT_VALEUR = DEPOT_VALEUR +(DEPOT_VALEUR*(25/100));
            console.log(DEPOT_VALEUR);
            Population = Population+4;
            console.log('Ta population est de',Population);

        }
}

function SiloPrincipal(){
        if(BOIS >= (100 * multiply) && ARGILE >= 100 && FER >= 80 && CÉREALE >= 50 && (SILO_PRINCIPAL == SILO_LEVEL)){ 
            SILO_PRINCIPAL++;
            SILO_LEVEL++;

            BOIS = BOIS - (100 * multiply);
            ARGILE = ARGILE-(100 * multiply);
            FER = FER-(100 * multiply);
            CÉREALE = CÉREALE-(100 * multiply);

            rdp.innerHTML = SILO_PRINCIPAL;
            multiplySilo++;
            SILO_VALEUR = SILO_VALEUR +(SILO_VALEUR*(25/100));
            console.log(SILO_VALEUR);
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
}





bois();
argile();
fer();
céreale();