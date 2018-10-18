
var rcaserne =document.getElementById('caserne');
var rc = document.getElementById('CASERNE');

var BOIS = 0;
var ARGILE = 0;
var FER = 0;
var CÉREALE = 0;

var timerBois = 0;
var timerArgile = 0;
var timerFer = 0;
var timerCéreale = 0;
var multiply = 1;


var CASERNE = 0;
var CASERNE_LEVEL = 0;

function bois() {
    if (timerBois && (BOIS >= DEPOT_VALEUR)) {
        clearTimeout(timerBois);
        timerBois = setTimeout(function(){
    bois();
},0);
    }
timerBois = setTimeout(function(){
    BOIS++;
    bois();
},1);
}


function argile() {
    if (timerArgile && (ARGILE >= DEPOT_VALEUR)) {
        clearTimeout(timerArgile);
        timerArgile = setTimeout(function(){
    argile();
},0);
    }
timerArgile = setTimeout(function(){
    ARGILE++;
    argile();
},1);
}

function fer() {
    if (timerFer && (FER >= DEPOT_VALEUR)) {
        clearTimeout(timerFer);
        timerFer = setTimeout(function(){
    fer();
},1);
    }
timerFer = setTimeout(function(){
    FER++;
    fer();
},1);
}

function céreale() {
    if (timerCéreale && (CÉREALE >= SILO_VALEUR)) {
        clearTimeout(timerCéreale);
        timerCéreale = setTimeout(function(){
    céreale();
},0);
    }
timerCéreale = setTimeout(function(){
    CÉREALE++;
    céreale();
},1);
}


function CaserneUp(){
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


bois();
argile();
fer();
céreale();