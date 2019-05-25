const Provinces = require('../data/json/Nepal/Provinces.json');
const Metro = require('../data/json/Nepal/Metro.json');
const SubMetro = require('../data/json/Nepal/SubMetro');

module.exports = {
    getallproviences: function getallproviences() {
        return Provinces.map(i => i.Provinces)
    },
    getProvienceDetails: function getProvienceDetails(name) {
        return Provinces.filter(i => i.Provinces == name)
    },
    getMetroDetails: function getMetroDetails(name) {
        return Metro.filter(i => i.Province == name)
    },
    getSubMetroDetails: function getSubMetroDetails(name) {
        return SubMetro.filter(i => i.Province == name)
    },

}