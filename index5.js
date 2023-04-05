let presidentkey = true;
let primeMinisterkey =true;
let generalOfArmiesKey = true;
let masterKey = false;

const bombWillLaunch = presidentkey & primeMinisterkey & generalOfArmiesKey || (masterKey);

console.log(bombWillLaunch);
