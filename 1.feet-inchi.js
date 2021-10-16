var alimFeet = 24;
var alimInchi = alimFeet / 12;
console.log(alimInchi);

// Use Function...........

function feetToInchi (inchi){
    var inchis = inchi / 12;
    return inchis;
}
var nanaFeet = feetToInchi(156);
console.log(nanaFeet);

var amarFeet  = feetToInchi(144);
console.log(amarFeet);