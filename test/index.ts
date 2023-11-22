import { describe, it, } from "mocha";
import { assert } from 'chai';
import Nepal from '../src/Nepal';

describe('Nepal Political Division', function () {
    describe('Province', () => {
        it('should return an array of provinces', function () {
            const provinces = Nepal.Province();
            assert.isArray(provinces);
        });
        it('should return 7 provinces', () => {
            const provinces = Nepal.Province();
            assert.lengthOf(provinces, 7);
        });
    })

    describe('District', () => {
        it('should return an array of districts', function () {
            const districts = Nepal.DistrictByProvince('प्रदेश १');
            assert.isArray(districts);
        });
        it('should return 14 districts for \'प्रदेश १\'', () => {
            const districts = Nepal.DistrictByProvince('प्रदेश १');
            assert.lengthOf(districts, 14);
        });
    })

    describe('Municipality', () => {
        it('should return an array of municipalities', function () {
            const municipalities = Nepal.LocalBodiesByDistrict('झापा');
            assert.isArray(municipalities);
        });
        it('should return 15 municipalities for \'झापा\'', () => {
            const municipalities = Nepal.LocalBodiesByDistrict('झापा');
            assert.lengthOf(municipalities, 15);
        });
    })

    describe('Ward', () => {
        it('should return an array of wards', function () {
            const wards = Nepal.WardDetails("गौरादह नगरपालिका");
            assert.isArray(wards);
        });
        it('should return 9 wards for \'गौरादह नगरपालिका\'', () => {
            const wards = Nepal.WardDetails("गौरादह नगरपालिका");
            assert.lengthOf(wards, 9);
        });
    })
});