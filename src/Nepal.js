const Districts = require('../data/json/Nepal/District.json');
const Metros = require('../data/json/Nepal/Metro.json');
const SubMetros = require('../data/json/Nepal/SubMetro.json');
const Municipalitiess = require('../data/json/Nepal/Municipalities.json');
const RularMunicipalitiess = require('../data/json/Nepal/RularMunicipalities.json');
const Provinces = require('../data/json/Nepal/Provinces.json');


module.exports = {
    Province: function Province() {
        return Provinces.map(i => i.Provinces)
    },
    District: function District() {
        return Districts.map(i => i.Name)
    },
    DistrictNepali: function DistrictNepali() {
        return Districts.map(i => i.Nepali)
    },
    DistrictByProvience: function DistrictByProvience(name) {
        const res = Districts.filter(i => i.Province == name);
        return res.map(i => i.Name);
    },
    DistrictNepaliByProvience: function DistrictNepaliByProvience(name) {
        const res = Districts.filter(i => i.Province == name);
        return res.map(i => i.Nepali);
    },
    DistrictHeadquarters: function DistrictHeadquarters(name) {
        const res = Districts.filter(i => i.Name == name);
        return res.map(i => i.Headquarters)[0];
    },
    Metro: function Metro() {
        return Metros.map(i => i.Name)
    },
    MetroNepali: function MetroNepali() {
        return Metros.map(i => i.Nepali)
    },
    MetroByProvience: function MetroByProvience(name) {
        const res = Metros.filter(i => i.Province == name);
        return res.map(i => i.Name);
    },
    MetroNepaliByProvience: function MetroNepaliByProvience(name) {
        const res = Metros.filter(i => i.Province == name);
        return res.map(i => i.Nepali);
    },
    SubMetro: function SubMetro() {
        return SubMetros.map(i => i.Name)
    },
    SubMetroNepali: function SubMetroNepali() {
        return SubMetros.map(i => i.Nepali)
    },
    SubMetroByProvience: function SubMetroByProvience(name) {
        const res = SubMetros.filter(i => i.Province == name);
        return res.map(i => i.Name);
    },
    SubMetroNepaliByProvience: function SubMetroNepaliByProvience(name) {
        const res = SubMetros.filter(i => i.Province == name);
        return res.map(i => i.Nepali);
    },
    Municipalities: function Municipalities() {
        return Municipalitiess.map(i => i.Name)
    },
    MunicipalitiesNepali: function MunicipalitiesNepali() {
        return Municipalitiess.map(i => i.Nepali)
    },
    MunicipalitiesByProvience: function MunicipalitiesByProvience(name) {
        const res = Municipalitiess.filter(i => i.Province == name);
        return res.map(i => i.Name);
    },
    MunicipalitiesNepaliByProvience: function MunicipalitiesNepaliByProvience(name) {
        const res = Municipalitiess.filter(i => i.Province == name);
        return res.map(i => i.Nepali);
    },
    MunicipalitiesByDistrict: function MunicipalitiesByDistrict(name) {
        const res = Municipalitiess.filter(i => i.District == name);
        return res.map(i => i.Name);
    },
    MunicipalitiesNepaliByDistrict: function MunicipalitiesNepaliByDistrict(name) {
        const res = Municipalitiess.filter(i => i.District == name);
        return res.map(i => i.Nepali);
    },
    RularMunicipalities: function RularMunicipalities() {
        return RularMunicipalitiess.map(i => i.Name)
    },
    RularMunicipalitiesNepali: function RularMunicipalitiesNepali() {
        return RularMunicipalitiess.map(i => i.Nepali)
    },
    RularMunicipalitiesByProvience: function RularMunicipalitiesByProvience(name) {
        const res = RularMunicipalitiess.filter(i => i.Province == name);
        return res.map(i => i.Name);
    },
    RularMunicipalitiesNepaliByProvience: function RularMunicipalitiesNepaliByProvience(name) {
        const res = RularMunicipalitiess.filter(i => i.Province == name);
        return res.map(i => i.Nepali);
    },
    RularMunicipalitiesByDistrict: function RularMunicipalitiesByDistrict(name) {
        const res = RularMunicipalitiess.filter(i => i.District == name);
        return res.map(i => i.Name);
    },
    RularMunicipalitiesNepaliByDistrict: function RularMunicipalitiesNepaliByDistrict(name) {
        const res = RularMunicipalitiess.filter(i => i.District == name);
        return res.map(i => i.Nepali);
    }
}