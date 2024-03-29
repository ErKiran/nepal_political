# nepal_political
![Logo](http://i68.tinypic.com/iddumb.png)

[![npm version](https://badge.fury.io/js/nepal_political.svg)](https://www.npmjs.com/package/nepal_political/v/1.3.1)
![Thank](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)

A mini 133.9kB npm package that contains all the political/division information about Nepal. [Check Size](https://bundlephobia.com/package/nepal_political@1.3.1)

### No any external dependicies. 
## Usage


Install via npm 
``` js
npm i nepal_political
``` 

Import Module in your project
``` js 
const Nepal = require('nepal_political');
or
import Nepal from 'nepal_political';
```

There is interactive GIS Based Website Developed by the goverment of Nepal. [Check Here](http://103.69.124.141/)

## Simple Usage Documentation

## Province
_____________________________________________________
#### Get all Province in Nepal

```javascript
Nepal.Province()
```

result 
```javascript
[
  'प्रदेश १',
  'मधेश प्रदेश',
  'बागमती प्रदेश',
  'गण्डकी प्रदेश',
  'लुम्बिनी प्रदेश',
  'कर्णाली प्रदेश',
  'सुदूरपश्चिम प्रदेश'
]
```

#### Get all districts

```javascript
Nepal.AllDistricts()
```
result
```javascript
[
  'सोलुखुम्बु',
  'झापा',
  ...
]
```

#### Get all districts in Province

```javascript
Nepal.DistrictByProvince('प्रदेश १')
```
result 
```javascript
[
  'सोलुखुम्बु', 
  'संखुवासभा',
  'ताप्लेजुङ', 
  'सुनसरी',
  'पाँचथर', 
  'ओखलढुंगा',
  'झापा',   
  'उदयपुर',
  'भोजपुर',  
  'धनकुटा',
  'तेह्रथुम',  
  'इलाम',
  'खोटाङ',  
  'मोरङ'
]
```

#### Get all localbody in District

```javascript
Nepal.LocalBodiesByDistrict('काठमाडौं')
```

result 
```javascript 
[
  'दक्षिणकाली नगरपालिका',
  'गोकर्णेश्वर नगरपालिका',
  'चन्द्रागिरी नगरपालिका',
  'तारकेश्वर नगरपालिका',
  'कागेश्वरी मनोहरा नगरपालिका',
  'बुढानिलकण्ठ नगरपालिका',
  'किर्तिपुर नगरपालिका',
  'काठमाण्डौ महानगरपालिका',
  'टोखा नगरपालिका',
  'शङ्खरापुर नगरपालिका',
  'नागार्जुन नगरपालिका'
]
```

#### Get all Ward in Localbody

```javascript
Nepal.WardDetails('काठमाण्डौ महानगरपालिका')
```

result 
```javascript 
[ 1,  2,  3,  4,  5,  6,  7,  8,  9,
 10, 11, 12, 13, 14, 15, 16, 17, 18,
 19, 20, 21, 22, 23, 24, 25, 26, 27,
28, 29, 30, 31, 32 ]
  ```
