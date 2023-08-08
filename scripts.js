

var olives = 0;
var trees = 0;
var treeCost = 10;
var farmers = 0
var farmerCost = 100;
var plots = 0;
var plotCost = 1000;
var farms = 0;
var farmCost = 10000;

var treeMult = 1;
var treeMultCost = 100;
var farmerMult = 1;
var farmerMultCost = 1000;
var plotMult = 1;
var plotMultCost = 10000;
var farmMult = 1;
var farmMultCost = 100000;


var olivesPerSecond = 0;

function OliveClick(number){
    olives = olives + number;
    document.getElementById("olives").innerHTML = olives;
};

function TreeClick(number, mult){
    olives = olives + (number * mult);
    document.getElementById("olives").innerHTML = olives;
};

function FarmerClick(number, mult){
    olives = olives + (number * 10 * mult);
    document.getElementById("olives").innerHTML = olives;
};

function PlotClick(number, mult){
    olives = olives + (number * 100 * mult);
    document.getElementById("olives").innerHTML = olives;
};

function FarmClick(number, mult){
    olives = olives + (number * 1000 * mult);
    document.getElementById("olives").innerHTML = olives;
};

function BuyTree(){
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

function TreeMultUp(){
    treeMultCost = Math.floor(100 * (3 *treeMult));
    if(olives >= treeMultCost){
        treeMult = treeMult * 2;
        olives = olives - treeMultCost;
        document.getElementById('treeMult').innerHTML = treeMult;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(100 * (3 * treeMult));
    document.getElementById('treeMultCost').innerHTML = nextCost;

};

function BuyFarmer(){
    farmerCost = Math.floor(100 * Math.pow(1.1,farmers));
    if(olives >= farmerCost){
        farmers = farmers + 1;
        olives = olives - farmerCost;
        document.getElementById('farmers').innerHTML = farmers;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,farmers));
    document.getElementById('farmerCost').innerHTML = nextCost;

};

function FarmerMultUp(){
    farmerMultCost = Math.floor(1000 * (3 *farmerMult));
    if(olives >= farmerMultCost){
        farmerMult = farmerMult * 2;
        olives = olives - farmerMultCost;
        document.getElementById('farmerMult').innerHTML = farmerMult;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(1000 * (3 * farmerMult));
    document.getElementById('farmerMultCost').innerHTML = nextCost;

};

function BuyPlot(){
    plotCost = Math.floor(1000 * Math.pow(1.1,plots));
    if(olives >= plotCost){
        plots = plots + 1;
        olives = olives - plotCost;
        document.getElementById('plots').innerHTML = plots;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,plots));
    document.getElementById('plotCost').innerHTML = nextCost;
};

function PlotMultUp(){
    plotMultCost = Math.floor(10000 * (3 *plotMult));
    if(olives >= plotMultCost){
        plotMult = plotMult * 2;
        olives = olives - plotMultCost;
        document.getElementById('plotMult').innerHTML = plotMult;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(10000 * (3 * plotMult));
    document.getElementById('plotMultCost').innerHTML = nextCost;

};

function BuyFarm(){
    farmCost = Math.floor(10000 * Math.pow(1.1,farms));
    if(olives >= farmCost){
        farms = farms + 1;
        olives = olives - farmCost;
        document.getElementById('farms').innerHTML = farms;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(10000 * Math.pow(1.1,farms));
    document.getElementById('farmCost').innerHTML = nextCost;
};

function FarmMultUp(){
    farmMultCost = Math.floor(100000 * (3 *farmMult));
    if(olives >= farmMultCost){
        farmMult = farmMult * 2;
        olives = olives - farmMultCost;
        document.getElementById('farmMult').innerHTML = farmMult;
        document.getElementById('olives').innerHTML = olives;
    };
    var nextCost = Math.floor(100000 * (3 * farmMult));
    document.getElementById('farmMultCost').innerHTML = nextCost;

};



window.setInterval(function(){
    TreeClick(trees, treeMult);
    FarmerClick(farmers, farmerMult);
    PlotClick(plots, plotMult);
    FarmClick(farms, farmMult);
    var newPerSecond = (trees * treeMult) + (farmers * 10 * farmerMult) + (plots * 100 * plotMult) + (farms * 1000 * farmMult);
    document.getElementById('olivesPerSecond').innerHTML = newPerSecond;
}, 1000);
