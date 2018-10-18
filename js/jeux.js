
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

var rcaserne = document.getElementById('rc');
var rcsr = document.getElementById('CASERNE');

var recurie = document.getElementById('re');
var reci = document.getElementById('ECURIE');

var recurie = document.getElementById('ra');
var ratl = document.getElementById('ATELIER');

var recurie = document.getElementById('rf');
var rfog = document.getElementById('FORGE');

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

var CASERNE_PRINCIPAL = 0;
var CASERNE_LEVEL = 0;

var ECURIE_PRINCIPAL = 0;
var ECURIE_LEVEL = 0;

var ATELIER_PRINCIPAL = 0;
var ATELIER_LEVEL = 0;

var FORGE_PRINCIPAL = 0;
var FORGE_LEVEL = 0;

var multiplyCaserne = 1;
var multiplyEcurie = 1;
var multiplyAtelier = 1;
var multiplyForge = 1;
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

    if(BOIS >= (200 * multiply) && ARGILE >= (150 * multiply) && FER >= (110 * multiply) && CÉREALE >= (90 * multiply) && (BATIMENT_PRINCIPAL == BATIMENT_LEVEL)){ 
        //console.log("ca marche")
        BATIMENT_PRINCIPAL++;
        BATIMENT_LEVEL++;

        BOIS = BOIS - (200 * multiply);
        ARGILE = ARGILE-(150 * multiply);
        FER = FER-(110 * multiply);
        CÉREALE = CÉREALE-(90 * multiply);
        //console.log(BATIMENT_PRINCIPAL);
        rbp.innerHTML = BATIMENT_PRINCIPAL;
        multiply++
        Population = Population+7;
        console.log('Ta population est de',Population);

    }
}


function DepotPrincipal(){
        if(BOIS >= (140 * multiplyDepot) && ARGILE >= (160 * multiplyDepot) && FER >= (120 * multiplyDepot) && CÉREALE >= (100 * multiplyDepot) && (DEPOT_PRINCIPAL == DEPOT_LEVEL)){ 
            DEPOT_PRINCIPAL++;
            DEPOT_LEVEL++;

            BOIS = BOIS - (140 * multiplyDepot);
            ARGILE = ARGILE-(160 * multiplyDepot);
            FER = FER-(120 * multiplyDepot);
            CÉREALE = CÉREALE-(100 * multiplyDepot);

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
        if(BOIS >= (100 * multiplySilo) && ARGILE >= (170 * multiplySilo) && FER >= (130 * multiplySilo) && CÉREALE >= (190 * multiplySilo) && (SILO_PRINCIPAL == SILO_LEVEL)){ 
            SILO_PRINCIPAL++;
            SILO_LEVEL++;

            BOIS = BOIS - (100 * multiplySilo);
            ARGILE = ARGILE-(170 * multiplySilo);
            FER = FER-(130 * multiplySilo);
            CÉREALE = CÉREALE-(190 * multiplySilo);

            rsl.innerHTML = SILO_PRINCIPAL;
            multiplySilo++;
            SILO_VALEUR = SILO_VALEUR +(SILO_VALEUR*(25/100));
            console.log(SILO_VALEUR);
            Population = Population+3;
            console.log('Le niveau de silo est de',SILO_LEVEL)
            console.log('Ta population est de',Population);

        }
    }



function CaserneUp(){
        if(BOIS >= (80 * multiplyCaserne) && ARGILE >= (60 * multiplyCaserne) && FER >= (170 * multiplyCaserne) && CÉREALE >= (100 * multiplyCaserne) && (CASERNE_PRINCIPAL == CASERNE_LEVEL)){ 
            CASERNE_PRINCIPAL++;
            CASERNE_LEVEL++;

            BOIS = BOIS - (80 * multiplyCaserne);
            ARGILE = ARGILE-(60 * multiplyCaserne);
            FER = FER-(170 * multiplyCaserne);
            CÉREALE = CÉREALE-(100 * multiplyCaserne);

            rcsr.innerHTML = CASERNE_PRINCIPAL;
            multiplyCaserne++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function EcurieUp(){
        if(BOIS >= (200 * multiplyEcurie) && ARGILE >= (100 * multiplyEcurie) && FER >= (150 * multiplyEcurie) && CÉREALE >= (270 * multiplyEcurie) && (ECURIE_PRINCIPAL == ECURIE_LEVEL)){ 
            ECURIE_PRINCIPAL++;
            ECURIE_LEVEL++;

            BOIS = BOIS - (200 * multiplyEcurie);
            ARGILE = ARGILE-(100 * multiplyEcurie);
            FER = FER-(150 * multiplyEcurie);
            CÉREALE = CÉREALE-(270 * multiplyEcurie);

            reci.innerHTML = ECURIE_PRINCIPAL;
            multiplyEcurie++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function AtelierUp(){
        if(BOIS >= (300 * multiplyAtelier) && ARGILE >= (100 * multiplyAtelier) && FER >= (470 * multiplyAtelier) && CÉREALE >= (210 * multiplyAtelier) && (ATELIER_PRINCIPAL == ATELIER_LEVEL)){ 
            ATELIER_PRINCIPAL++;
            ATELIER_LEVEL++;

            BOIS = BOIS - (300 * multiplyAtelier);
            ARGILE = ARGILE-(100 * multiplyAtelier);
            FER = FER-(470 * multiplyAtelier);
            CÉREALE = CÉREALE-(210 * multiplyAtelier);

            ratl.innerHTML = ATELIER_PRINCIPAL;
            multiplyAtelier++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function ForgeUp(){
        if(BOIS >= (100 * multiplyForge) && ARGILE >= (100 * multiplyForge) && FER >= (400 * multiplyForge) && CÉREALE >= (100 * multiplyForge) && (FORGE_PRINCIPAL == FORGE_LEVEL)){ 
            FORGE_PRINCIPAL++;
            FORGE_LEVEL++;

            BOIS = BOIS - (100 * multiplyForge);
            ARGILE = ARGILE-(100 * multiplyForge);
            FER = FER-(400 * multiplyForge);
            CÉREALE = CÉREALE-(100 * multiplyForge);

            rfog.innerHTML = FORGE_PRINCIPAL;
            multiplyForge++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

bois();
argile();
fer();
céreale();