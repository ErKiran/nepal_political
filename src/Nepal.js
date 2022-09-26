const Nepal = require('../data/Nepal.json')

module.exports = {
    Province: function Province() {
       const statesSet = new Set()
       Nepal.map(i =>{
        statesSet.add(i.state)
       })
       return Array.from(statesSet)
    },
    DistrictByProvince: function DistrictByProvince(name) {
        const districtSet = new Set()
        Nepal.map(i =>{
            if(i.state === name){
                districtSet.add(i.district)
            }
        })
        return Array.from(districtSet)
    },
    LocalBodiesByDistrict: function LocalBodiesByDistrict(name) {
        const localBodiesSet = new Set()
        Nepal.map(i =>{
            if(i.district === name){
                localBodiesSet.add(i.localbody)
            }
        })
        return Array.from(localBodiesSet)
    },
    WardDetails: function WardDetails(name) {
        const wardSet = new Set()
        Nepal.map(i =>{
            if(i.localbody === name){
                wardSet.add(i.ward)
                return
            }
        })
        return Array.from(...wardSet)
    }
}