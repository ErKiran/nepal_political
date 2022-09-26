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

## Province
_____________________________________________________
#### Get all Province in Nepal

```js
Nepal.Province()
```

result 
```js
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

#### Get all districts in Province

```js
Nepal.DistrictByProvince('प्रदेश १')
```
result 
```js
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

```js
Nepal.LocalBodiesByDistrict('काठमाडौं')
```

result 
```js 
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

```js
Nepal.WardByLocalBody('काठमाण्डौ महानगरपालिका')
```

result 
```js 
[ 1,  2,  3,  4,  5,  6,  7,  8,  9,
 10, 11, 12, 13, 14, 15, 16, 17, 18,
 19, 20, 21, 22, 23, 24, 25, 26, 27,
28, 29, 30, 31, 32 ]
  ```