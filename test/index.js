const assert = require('assert');

const { Province, DistrictByProvince, LocalBodiesByDistrict, WardDetails } = require('../src/Nepal');

describe('Province', function () {
    it('should return all provinces', function () {
        assert.equal(Province().length, 7);
    });
});

describe('DistrictByProvince', function () {
    it('should return all districts by province', function () {
        assert.equal(DistrictByProvince('प्रदेश १').length, 14);
    });
});

describe('LocalBodiesByDistrict', function () {
    it('should return all local bodies by district', function () {
        assert.equal(LocalBodiesByDistrict('काठमाडौं').length, 11);
    });
});

describe('WardDetails', function () {
    it('should return all wards by local body', function () {
        assert.equal(WardDetails('काठमाण्डौ महानगरपालिका').length, 32);
    });
});