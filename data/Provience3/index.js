const fs = require('fs');
const Mun = require('./RularMunicipalities');

const trimmed = Mun.map(({ Rank, Website, ...rest }) => rest);
fs.writeFileSync('TrimedRularMun.json', JSON.stringify(trimmed, null, 2));