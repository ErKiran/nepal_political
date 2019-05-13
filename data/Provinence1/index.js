const Mun = require('./Municipalities.json');
const fs = require('fs');

//delete json.map
let todelete = "Rank";

const trimmed = Mun.map(({ Rank, Website, ...rest }) => rest)
console.log(trimmed);

fs.writeFileSync('trimmed.json', JSON.stringify(trimmed, null, 2));
//console.log(Mun.map(i => i.Nepali));