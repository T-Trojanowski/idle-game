
var olives = 0;
var trees = 0;
var treeCost = 10;

function OliveClick(number){
    olives = olives + number;
    document.getElementById("olives").innerHTML = olives;
};

function buyTree(){
    treeCost = Math.floor(10 * Math.pow(1.1,trees));
    if(olives >= treeCost){
        trees = trees + 1;
        olives = olives - treeCost;
        document.getElementById('trees').innerHTML = trees;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,trees));
    document.getElementById('treeCost').innerHTML = nextCost;
};

window.setInterval(function(){
    OliveClick(trees);
}, 1000);
