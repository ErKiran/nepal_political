const fs = require('fs');
const Mun = require('./districts');

const trimmed = Mun.map(({ h, Website, ...rest }) => rest);
fs.writeFileSync('TrimedMun.json', JSON.stringify(trimmed, null, 2));