const fs = require('fs');
const Mun = require('./district');

const trimmed = Mun.map(({ h, ...rest }) => rest);
fs.writeFileSync('District.json', JSON.stringify(trimmed, null, 2));