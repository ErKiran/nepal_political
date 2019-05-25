const fs = require('fs');
const District = require('./District.json');

for (i = 0; i < District.length; i++) {
    District[i].Name = District[i].Districts
    delete District[i].Districts;
}
console.log(District);