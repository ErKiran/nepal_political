import Nepal from '../data/Nepal.json'

/**
 * Represents a collection of functions related to political divisions in Nepal.
 */
export default {
    /**
     * Retrieves the list of provinces in Nepal.
     * @returns {string[]} An array of province names.
     */
    Province: function Province(): string[] {
        const statesSet = new Set<string>()
        Nepal.map(i => {
            statesSet.add(i.state)
        })
        return Array.from(statesSet)
    },
    /**
     * Retrieves the list of districts in a specific province.
     * @param provinceName - The name of the province.
     * @returns {string[]} An array of district names.
     */
    DistrictByProvince: function DistrictByProvince(provinceName: string): string[] {
        const districtSet = new Set<string>()
        Nepal.map(i => {
            if (i.state === provinceName) {
                districtSet.add(i.district)
            }
        })
        return Array.from(districtSet)
    },
    /**
     * Retrieves the list of local bodies in a specific district.
     * @param districtName - The name of the district.
     * @returns {string[]} An array of local body names.
     */
    LocalBodiesByDistrict: function LocalBodiesByDistrict(districtName: string): string[] {
        const localBodiesSet = new Set<string>()
        Nepal.map(i => {
            if (i.district === districtName) {
                localBodiesSet.add(i.localbody)
            }
        })
        return Array.from(localBodiesSet)
    },
    /**
     * Retrieves the list of ward details for a specific municipality.
     * @param municipalityName - The name of the municipality.
     * @returns {number[]}
     */
    WardDetails: function WardDetails(municipalityName: string): number[] {
        const localBody = Nepal.find(i => i.localbody === municipalityName);
        return localBody ? Array.from(new Set(localBody.ward)) : [];
    },
    /**
     * Retrives the list of all districts in Nepal.
     * @function AllDistricts
     * @returns {string[]} An array of unique district names.
     */
    AllDistricts: function AllDistricts(): string[] {
        const districtSet = new Set<string>()
        Nepal.map(i => {
            districtSet.add(i.district)
        })
        return Array.from(districtSet)
    }
}