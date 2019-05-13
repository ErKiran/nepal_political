const fs = require('fs');
const NepalMun = require('./Nepal/TrimedMun');
/*const Kath = NepalMun.filter(i => i.Province == "Province No. 3")
fs.writeFileSync('Province3Municipalities.json', JSON.stringify(Kath, null, 2))*/

/*const Sudur = NepalMun.filter(i => i.Province == "Sudurpashchim")
console.log(Sudur)
fs.writeFileSync('SudurMunicipalities.json', JSON.stringify(Sudur, null, 2))*/

const pach = NepalMun.filter(i => i.Province == "Karnali")
fs.writeFileSync('Municipalities.json', JSON.stringify(pach, null, 2))