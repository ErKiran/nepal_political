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

#### Get all districts in Province

```js
Nepal.DistrictByProvince('प्रदेश १')
```

#### Get all localbody in District

```js
Nepal.LocalBodiesByDistrict('काठमाडौं')
```

#### Get all Ward in Localbody

```js
Nepal.WardByLocalBody('काठमाण्डौ महानगरपालिका')
```