const fs = require('fs');
const District = require('./District.json');
const trimmed = District.map(({ Geocode, ...rest }) => rest);
fs.writeFileSync('./District.json', JSON.stringify(trimmed, null, 2))