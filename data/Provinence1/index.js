const fs = require('fs');
const Mun = require('./Municipalities');

const trimmed = Mun.map(({ Rank, Website, ...rest }) => rest);
fs.writeFileSync('Trimed.json', JSON.stringify(trimmed, null, 2));
