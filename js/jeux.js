
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

var ratelier = document.getElementById('ra');
var ratl = document.getElementById('ATELIER');

var rforge = document.getElementById('rf');
var rfog = document.getElementById('FORGE');

var rtroupedef = document.getElementById('rtd');
var rtdef = document.getElementById('DEF');

var rtroupeoff = document.getElementById('rtof');
var rtoff = document.getElementById('OFF');

var rtroupetireur = document.getElementById('rtir');
var rttireur = document.getElementById('TIREUR');

var rcavaleriespy = document.getElementById('rspy');
var rtspy = document.getElementById('SPY');

var rcavaleriedef = document.getElementById('rdef');
var rcdef = document.getElementById('CDEF');

//var BOIS = 750;
//var ARGILE = 750;
//var FER = 750;
//var CÉREALE = 750;

var ressources = {
    argile: 750,
    fer:750,
    bois:750,
    céréale:750,
};



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
var CASERNE_UNLOCK_OFF = 3;
var CASERNE_UNLOCK_TIREUR = 5;

var ECURIE_PRINCIPAL = 0;
var ECURIE_LEVEL = 0;
var ECURIE_UNLOCK_DEF = 5;

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

//Variable pour les troupes

var TROUPE_DEF = 0;
var TROUPE_OFF = 0;
var TROUPE_NB_OFF = 0;
var TROUPE_TIREUR = 0;
var TROUPE_NB_TIREUR = 0;
var CAVALERIE_SPY = 0;
var CAVALERIE_NB_DEF =0;


function bois() {
    if (timerBois && (ressources.bois >= DEPOT_VALEUR)) {
        clearTimeout(timerBois);
        timerBois = setTimeout(function(){
        rbois.innerHTML = ressources.bois;
    bois();
},0);
    }
timerBois = setTimeout(function(){
    ressources.bois++;
        rbois.innerHTML = ressources.bois;
    bois();
},1);
}


function argile() {
    if (timerArgile && (ressources.argile >= DEPOT_VALEUR)) {
        clearTimeout(timerArgile);
        timerArgile = setTimeout(function(){
        rargile.innerHTML = ressources.argile;
    argile();
},0);
    }
timerArgile = setTimeout(function(){
    ressources.argile++;
        rargile.innerHTML = ressources.argile;
    argile();
},1);
}

function fer() {
    if (timerFer && (ressources.fer >= DEPOT_VALEUR)) {
        clearTimeout(timerFer);
        timerFer = setTimeout(function(){
        rfer.innerHTML = ressources.fer;
    fer();
},0);
    }
timerFer = setTimeout(function(){
    ressources.fer++;
        rfer.innerHTML = ressources.fer;
    fer();
},1);
}

function céreale() {
    if (timerCéreale && (ressources.céréale >= SILO_VALEUR)) {
        clearTimeout(timerCéreale);
        timerCéreale = setTimeout(function(){
        rcéreale.innerHTML = ressources.céréale;
    céreale();
},0);
    }
timerCéreale = setTimeout(function(){
    ressources.céréale++;
        rcéreale.innerHTML = ressources.céréale;
    céreale();
},1);
}


function BatimentPrincipal(){

    if(ressources.bois >= (200 * multiply) && ressources.argile >= (150 * multiply) && ressources.fer >= (110 * multiply) && ressources.céréale >= (90 * multiply) && (BATIMENT_PRINCIPAL == BATIMENT_LEVEL)){ 
        //console.log("ca marche")
        BATIMENT_PRINCIPAL++;
        BATIMENT_LEVEL++;

        ressources.bois = ressources.bois - (200 * multiply);
        ressources.argile = ressources.argile-(150 * multiply);
        ressources.fer = ressources.fer-(110 * multiply);
        ressources.céréale = ressources.céréale-(90 * multiply);
        //console.log(BATIMENT_PRINCIPAL);
        rbp.innerHTML = BATIMENT_PRINCIPAL;
        multiply++
        Population = Population+7;
        console.log('Ta population est de',Population);

    }
}


function DepotPrincipal(){
        if(ressources.bois >= (140 * multiplyDepot) && ressources.argile >= (160 * multiplyDepot) && ressources.fer >= (120 * multiplyDepot) && ressources.céréale >= (100 * multiplyDepot) && (DEPOT_PRINCIPAL == DEPOT_LEVEL)){ 
            DEPOT_PRINCIPAL++;
            DEPOT_LEVEL++;

            ressources.bois = ressources.bois - (140 * multiplyDepot);
            ressources.argile = ressources.argile-(160 * multiplyDepot);
            ressources.fer = ressources.fer-(120 * multiplyDepot);
            ressources.céréale = ressources.céréale-(100 * multiplyDepot);

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
        if(ressources.bois >= (100 * multiplySilo) && ressources.argile >= (170 * multiplySilo) && ressources.fer >= (130 * multiplySilo) && ressources.céréale >= (190 * multiplySilo) && (SILO_PRINCIPAL == SILO_LEVEL)){ 
            SILO_PRINCIPAL++;
            SILO_LEVEL++;

            ressources.bois = ressources.bois - (100 * multiplySilo);
            ressources.argile = ressources.argile-(170 * multiplySilo);
            ressources.fer = ressources.fer-(130 * multiplySilo);
            ressources.céréale = ressources.céréale-(190 * multiplySilo);

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
        if(ressources.bois >= (80 * multiplyCaserne) && ressources.argile >= (60 * multiplyCaserne) && ressources.fer >= (170 * multiplyCaserne) && ressources.céréale >= (100 * multiplyCaserne) && (CASERNE_PRINCIPAL == CASERNE_LEVEL)){ 
            CASERNE_PRINCIPAL++;
            CASERNE_LEVEL++;
            TROUPE_NB_OFF++;
            TROUPE_NB_TIREUR++;

            ressources.bois = ressources.bois - (80 * multiplyCaserne);
            ressources.argile = ressources.argile-(60 * multiplyCaserne);
            ressources.fer = ressources.fer-(170 * multiplyCaserne);
            ressources.céréale = ressources.céréale-(100 * multiplyCaserne);

            rcsr.innerHTML = CASERNE_PRINCIPAL;
            multiplyCaserne++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function EcurieUp(){
        if(ressources.bois >= (200 * multiplyEcurie) && ressources.argile >= (100 * multiplyEcurie) && ressources.fer >= (150 * multiplyEcurie) && ressources.céréale >= (270 * multiplyEcurie) && (ECURIE_PRINCIPAL == ECURIE_LEVEL)){ 
            ECURIE_PRINCIPAL++;
            ECURIE_LEVEL++;
            CAVALERIE_NB_DEF++;

            ressources.bois = ressources.bois - (200 * multiplyEcurie);
            ressources.argile = ressources.argile-(100 * multiplyEcurie);
            ressources.fer = ressources.fer-(150 * multiplyEcurie);
            ressources.céréale = ressources.céréale-(270 * multiplyEcurie);

            reci.innerHTML = ECURIE_PRINCIPAL;
            multiplyEcurie++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function AtelierUp(){
        if(ressources.bois >= (300 * multiplyAtelier) && ressources.argile >= (100 * multiplyAtelier) && ressources.fer >= (470 * multiplyAtelier) && ressources.céréale >= (210 * multiplyAtelier) && (ATELIER_PRINCIPAL == ATELIER_LEVEL)){ 
            ATELIER_PRINCIPAL++;
            ATELIER_LEVEL++;

            ressources.bois = ressources.bois - (300 * multiplyAtelier);
            ressources.argile = ressources.argile-(100 * multiplyAtelier);
            ressources.ressources.fer = FER-(470 * multiplyAtelier);
            ressources.céréale = ressources.céréale-(210 * multiplyAtelier);

            ratl.innerHTML = ATELIER_PRINCIPAL;
            multiplyAtelier++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }

function ForgeUp(){
        if(ressources.bois >= (100 * multiplyForge) && ressources.argile >= (100 * multiplyForge) && ressources.fer >= (400 * multiplyForge) && ressources.céréale >= (100 * multiplyForge) && (FORGE_PRINCIPAL == FORGE_LEVEL)){ 
            FORGE_PRINCIPAL++;
            FORGE_LEVEL++;

            ressources.bois = ressources.bois - (100 * multiplyForge);
            ressources.argile = ressources.argile-(100 * multiplyForge);
            ressources.fer = ressources.fer-(400 * multiplyForge);
            ressources.céréale = ressources.céréale-(100 * multiplyForge);

            rfog.innerHTML = FORGE_PRINCIPAL;
            multiplyForge++;
            Population = Population+3;
            console.log('Ta population est de',Population);

        }
    }


function TroupeDef(){
        if(ressources.bois >= 100 && ressources.argile >= 100 && ressources.fer >= 100 && ressources.céréale >= 100 && (TROUPE_DEF <= CASERNE_LEVEL)){ 
            TROUPE_DEF++;

            ressources.bois = ressources.bois - 100 ;
            ressources.argile = ressources.argile-100 ;
            ressources.fer = ressources.fer-100 ;
            ressources.céréale = ressources.céréale-100 ;

            rtdef.innerHTML = TROUPE_DEF;
        }
    }

function TroupeOff(){
    if(TROUPE_NB_OFF >= CASERNE_UNLOCK_OFF){ 
        if(ressources.bois >= 100 && ressources.argile >= 100 && ressources.fer >= 100 && ressources.céréale >= 100){ 
            TROUPE_OFF++;

            ressources.bois = ressources.bois - 100 ;
            ressources.argile = ressources.argile-100 ;
            ressources.fer = ressources.fer-100 ;
            ressources.céréale = ressources.céréale-100 ;

            rtoff.innerHTML = TROUPE_OFF;
        }
    }
        else{
            alert("Il faut que ta caserne soit niveau 3 pour débloquer les trouoes off");
        }
    }

function TroupeTireur(){
    if(TROUPE_NB_TIREUR >= CASERNE_UNLOCK_TIREUR){ 
        if(ressources.bois >= 200 && ressources.argile >= 100 && ressources.fer >= 250 && ressources.céréale >= 150 ){ 
            TROUPE_TIREUR++;

            ressources.bois = ressources.bois - 200 ;
            ressources.argile = ARGILE - 100 ;
            ressources.fer = ressources.fer - 250 ;
            ressources.céréale = ressources.céréale - 150 ;

            rttireur.innerHTML = TROUPE_TIREUR;
        }
    }
    else{
        alert("Il faut que ta caserne soit niveau 5 pour débloquer les trouoes tireur");
        }
    }

function CavalerieSpy(){
        if(ressources.bois >= 100 && ressources.argile >= 100 && ressources.fer >= 100 && ressources.céréale >= 100 && (CAVALERIE_SPY >= ECURIE_LEVEL)){ 
            CAVALERIE_SPY++;

            ressources.bois = ressources.bois - 100 ;
            ressources.argile = ressources.argile-100 ;
            ressources.fer = ressources.fer-100 ;
            ressources.céréale = ressources.céréale-100 ;

            rtspy.innerHTML = CAVALERIE_SPY;
        }
    }

function CavalerieDef(){
    if(CAVALERIE_NB_DEF >= ECURIE_UNLOCK_DEF){ 
        if(ressources.bois >= 200 && ressources.argile >= 100 && ressources.fer >= 250 && ressources.céréale >= 150 ){ 
            CAVALERIE_DEF++;

            ressources.bois = ressources.bois - 200 ;
            ressources.argile = ressources.argile - 100 ;
            ressources.fer = ressources.fer - 250 ;
            ressources.céréale = ressources.céréale - 150 ;

            rcdef.innerHTML = CAVALERIE_DEF;
        }
    }
    else{
        alert("Il faut que ton Ecurie soit niveau 5 pour débloquer la cavalerie Def");
        }
    }
/*
function TroupeTireur(){
    if(TROUPE_NB_TIREUR >= CASERNE_UNLOCK_TIREUR){ 
        if(BOIS >= 200 && ARGILE >= 100 && FER >= 250 && CÉREALE >= 150 ){ 
            TROUPE_TIREUR++;

            BOIS = BOIS - 200 ;
            ARGILE = ARGILE - 100 ;
            FER = FER - 250 ;
            CÉREALE = CÉREALE - 150 ;

            rttireur.innerHTML = TROUPE_TIREUR;
        }
    }
    else{
        alert("Il faut que ta caserne soit niveau 5 pour débloquer les trouoes tireur");
        }
    }

function TroupeTireur(){
    if(TROUPE_NB_TIREUR >= CASERNE_UNLOCK_TIREUR){ 
        if(BOIS >= 200 && ARGILE >= 100 && FER >= 250 && CÉREALE >= 150 ){ 
            TROUPE_TIREUR++;

            BOIS = BOIS - 200 ;
            ARGILE = ARGILE - 100 ;
            FER = FER - 250 ;
            CÉREALE = CÉREALE - 150 ;

            rttireur.innerHTML = TROUPE_TIREUR;
        }
    }
    else{
        alert("Il faut que ta caserne soit niveau 5 pour débloquer les trouoes tireur");
        }
    }
*/
bois();
argile();
fer();
céreale();