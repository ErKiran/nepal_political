const fs = require('fs');
const Mun = require('./SubMetro');


//const trimmed = Mun.map(({ h, ...rest }) => rest);
const filter = Mun.filter(i => i.Province == 'Sudurpashchim')
fs.writeFileSync('../SudurPashchim/SubMetro.json', JSON.stringify(filter, null, 2));