const fs = require('fs');
const NepalMun = require('./json/Nepal/TrimedMun');
/*const Kath = NepalMun.filter(i => i.Province == "Province No. 3")
fs.writeFileSync('Province3Municipalities.json', JSON.stringify(Kath, null, 2))*/

/*const Sudur = NepalMun.filter(i => i.Province == "Sudurpashchim")
console.log(Sudur)
fs.writeFileSync('SudurMunicipalities.json', JSON.stringify(Sudur, null, 2))*/

/*const pach = NepalMun.filter(i => i.Province == "Karnali");
const name = pach.map(i => i.Name)
//console.log(pach)
console.log(name)*/

function getMunicipalitiesByProvince(name) {
    const temp = NepalMun.filter(i => i.Province == name);
    const Municipalities = temp.map(i => i.Name);
    return Municipalities
}

console.log(getMunicipalitiesByProvince('Sudurpashchim'))