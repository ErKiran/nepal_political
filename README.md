# nepal_political

A mini 24.7KB npm package that contains all the political/division information about Nepal. [Check Size](https://bundlephobia.com/result?p=nepal_political@1.1.0)

### No any external dependicies. 
## Usage

Install via npm 
```
npm i nepal_political
``` 

Import Module in your project
```
const {Nepal} = require('nepal_political');
or
import {Nepal} from 'nepal_political');
```

## Simple Usage Documentation

## Districts
_____________________________________________________
#### Get all districts in Nepal

```
Nepal.District()
```

#### Get all districts Name in Nepali

```
Nepal.DistrictNepali()
```

#### Get all districts in Gandaki Province
```
Nepal.DistrictByProvince('Gandaki')
``` 
#### Get all districts Name in Nepali in Gandaki Province
```
Nepal.DistrictNepaliByProvince('Gandaki')
```

#### Caution while using Province Name
##### All the name of province 
```
Nepal.Province()
```
##### Use the name of province as given by the above method.
* 'Province No. 1'
* 'Province No. 2'
* 'Province No. 3'
* 'Gandaki'
* 'Province No. 5'
* 'Karnali'
* 'Sudurpashchim' 

#### Get Headquarters of District
```
Nepal.DistrictHeadquarters('Kaski')
```

## Metropolitan
____________________________________________________________
#### Get all Metropolitan in Nepal
```
Nepal.Metro()
```
#### Get all Metropolitan Name in Nepali
```
Nepal.Metro()
```

#### Get all Metropolitan  in Province No. 3
```
Nepal.MetroByProvince('Province No. 3')
``` 
#### Get all Metropolitan Name in Nepali in Province No. 3
```
Nepal.MetroNepaliByProvince('Province No. 3')
```
## SubMetropolitan 
__________________________________________________
#### Get all SubMetropolitan in Nepal
```
Nepal.SubMetro()
```
#### Get all SubMetropolitan Name in Nepali
```
Nepal.SubMetro()
```

#### Get all SubMetropolitan  in Province No. 3
```
Nepal.SubMetroByProvince('Province No. 3')
``` 
#### Get all SubMetropolitan Name in Nepali in Province No. 3
```
Nepal.SubMetroNepaliByProvince('Province No. 3')
```
## Municipalities
_____________________________________________________

#### Get all Municipalities in Nepal
```
Nepal.Municipalities()
```
#### Get all Municipalities Name in Nepali
```
Nepal.Municipalities()
```
#### Get all Municipalities  in Province No. 3
```
Nepal.MunicipalitiesByProvince('Province No. 3')
``` 
#### Get all Municipalities Name in Nepali in Province No. 3
```
Nepal.MunicipalitiesNepaliByProvince('Province No. 3')
```

#### Get all Municipalities  in Kathmandu District
```
Nepal.MunicipalitiesByDistrict('Kathmandu')
``` 
#### Get all Municipalities Name in Nepali Kathmandu District
```
Nepal.MunicipalitiesNepaliByDistrict('Kathmandu')
```
## RularMunicipalities
_____________________________________________________

#### Get all RularMunicipalities in Nepal
```
Nepal.RularMunicipalities()
```
#### Get all RularMunicipalities Name in Nepali
```
Nepal.RularMunicipalities()
```
#### Get all RularMunicipalities  in Province No. 5
```
Nepal.RularMunicipalitiesByProvince('Province No. 5')
``` 
#### Get all RularMunicipalities Name in Nepali in Province No. 5
```
Nepal.RularMunicipalitiesNepaliByProvince('Province No. 5')
```

#### Get all RularMunicipalities  in Kavrepalanchok District
```
Nepal.RularMunicipalitiesByDistrict('Kavrepalanchok')
``` 
#### Get all RularMunicipalities Name in Nepali Kavrepalanchok District
```
Nepal.RularMunicipalitiesNepaliByDistrict('Kavrepalanchok')
```

