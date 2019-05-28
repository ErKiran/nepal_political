# nepal_political
![Logo](http://i68.tinypic.com/iddumb.png)

[![npm version](https://badge.fury.io/js/nepal_political.svg)](https://www.npmjs.com/package/nepal_political)
![CI](https://travis-ci.org/ErKiran/nepal_political.svg?branch=master)
![Thank](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)

A mini 24.7KB npm package that contains all the political/division information about Nepal. [Check Size](https://bundlephobia.com/result?p=nepal_political@1.1.0)

### No any external dependicies. 
## Usage


Install via npm 
``` js
npm i nepal_political
``` 

Import Module in your project
``` js 
const {Nepal} = require('nepal_political');
or
import {Nepal} from 'nepal_political');
```

There is interactive GIS Based Website Developed by the goverment of Nepal. [Check Here](http://103.69.124.141/)

## Simple Usage Documentation

## Districts
_____________________________________________________
#### Get all districts in Nepal

```js
Nepal.District()
```

#### Get all districts Name in Nepali

```js
Nepal.DistrictNepali()
```

#### Get all districts in Gandaki Province
```js
Nepal.DistrictByProvince('Gandaki')
``` 
#### Get all districts Name in Nepali in Gandaki Province
```js
Nepal.DistrictNepaliByProvince('Gandaki')
```

#### Caution while using Province Name
##### All the name of province 
```js
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
```js
Nepal.DistrictHeadquarters('Kaski')
```

## Metropolitan
____________________________________________________________
#### Get all Metropolitan in Nepal
```js
Nepal.Metro()
```
#### Get all Metropolitan Name in Nepali
```js
Nepal.Metro()
```

#### Get all Metropolitan  in Province No. 3
```js
Nepal.MetroByProvince('Province No. 3')
``` 
#### Get all Metropolitan Name in Nepali in Province No. 3
```js
Nepal.MetroNepaliByProvince('Province No. 3')
```
## SubMetropolitan 
__________________________________________________
#### Get all SubMetropolitan in Nepal
```js
Nepal.SubMetro()
```
#### Get all SubMetropolitan Name in Nepali
```js
Nepal.SubMetro()
```

#### Get all SubMetropolitan  in Province No. 3
```js
Nepal.SubMetroByProvince('Province No. 3')
``` 
#### Get all SubMetropolitan Name in Nepali in Province No. 3
```js
Nepal.SubMetroNepaliByProvince('Province No. 3')
```
## Municipalities
_____________________________________________________

#### Get all Municipalities in Nepal
```js
Nepal.Municipalities()
```
#### Get all Municipalities Name in Nepali
```js
Nepal.Municipalities()
```
#### Get all Municipalities  in Province No. 3
```js
Nepal.MunicipalitiesByProvince('Province No. 3')
``` 
#### Get all Municipalities Name in Nepali in Province No. 3
```js
Nepal.MunicipalitiesNepaliByProvince('Province No. 3')
```

#### Get all Municipalities  in Kathmandu District
```js
Nepal.MunicipalitiesByDistrict('Kathmandu')
``` 
#### Get all Municipalities Name in Nepali Kathmandu District
```js
Nepal.MunicipalitiesNepaliByDistrict('Kathmandu')
```
## RularMunicipalities
_____________________________________________________

#### Get all RularMunicipalities in Nepal
```js
Nepal.RularMunicipalities()
```
#### Get all RularMunicipalities Name in Nepali
```js
Nepal.RularMunicipalities()
```
#### Get all RularMunicipalities  in Province No. 5
```js
Nepal.RularMunicipalitiesByProvince('Province No. 5')
``` 
#### Get all RularMunicipalities Name in Nepali in Province No. 5
```js
Nepal.RularMunicipalitiesNepaliByProvince('Province No. 5')
```

#### Get all RularMunicipalities  in Kavrepalanchok District
```js
Nepal.RularMunicipalitiesByDistrict('Kavrepalanchok')
``` 
#### Get all RularMunicipalities Name in Nepali Kavrepalanchok District
```js
Nepal.RularMunicipalitiesNepaliByDistrict('Kavrepalanchok')
```

