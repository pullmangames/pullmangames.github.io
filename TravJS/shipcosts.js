var farship={};
var freeship={};
var labship={};

var tdiscount=.2;
var ldiscount=.14;

var statecost=2000;
var crewstatecost=1500;
var lowcost=100;
var fuelcost=500;
var unfuelcost=100;

var highpassage=6000;
var midpassage=3000;
var lowpassage=1000;
var freight=1000;

farship.cargo=44;
farship.state=10;
farship.low=6;
farship.fuel=33;
farship.jump=2;
farship.cost=51385500;
farship.discounted=farship.cost*(1-tdiscount);
farship.mort=farship.discounted/240;
farship.fuelcost=unfuelcost;


freeship.cargo=88;
freeship.state=10;
freeship.low=20;
freeship.fuel=22;
freeship.jump=1;
freeship.cost=36567000;
freeship.discounted=freeship.cost*(1-tdiscount);
freeship.mort=freeship.discounted/240;
freeship.fuelcost=unfuelcost;


labship.cargo=20;
labship.state=20;
labship.low=0;
labship.fuel=88;
labship.jump=2;
labship.cost=125874000;
labship.discounted=labship.cost*(1-ldiscount);
labship.mort=labship.discounted/240;
labship.fuelcost=fuelcost;

var crew=10;

var maint=function(ship){
  return ship.cost*.001/24  
};

var income=function(ship){
    return midpassage*(ship.state-crew/2)+lowpassage*ship.low+freight*ship.cargo;  
};

var opex=function(ship){
    return (ship.state-(crew/2))*statecost+(crew/2)*crewstatecost+ship.low*lowcost+ship.fuelcost*ship.fuel;
};

var profit=function(ship){
  return income(ship)-opex(ship)-maint(ship)-ship.mort;  
};


console.log("Free:")
console.log(income(freeship));
console.log("-"+opex(freeship));
console.log("-"+maint(freeship));
console.log("-"+freeship.mort);
console.log("--------");
console.log(profit(freeship));
console.log("");
console.log("Far:")
console.log(income(farship));
console.log("-"+opex(farship));
console.log("-"+maint(farship));
console.log("-"+farship.mort);
console.log("--------");
console.log(profit(farship));
console.log("");
console.log("Lab:")
console.log(income(labship));
console.log("-"+opex(labship));
console.log("-"+maint(labship));
console.log("-"+labship.mort);
console.log("--------");
console.log(profit(labship));








