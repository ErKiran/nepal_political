const District = require('../SudurPashchim/RularMunicipalities.json');
//const District = require('./RularMunicipalities.json');
const fs = require('fs');

District.map(i => i.Province = "SudurPashchim")


//fs.writeFileSync('./District.json', JSON.stringify(trimmed, null, 2))
fs.appendFileSync('./National.json', JSON.stringify(District, null, 2))

