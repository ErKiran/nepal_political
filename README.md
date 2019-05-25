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

### Simple Usage Documentation

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
Nepal.DistrictByProvience('Gandaki')
``` 
#### Get all districts Name in Nepali in Gandaki Province
```
Nepal.DistrictNepaliByProvience('Gandaki')
```

#### Caution while using Province Name
##### All the name of province 
```
Nepal.Province()
```
##### Use the name of province as given by the above method.
* 'Province No. 1',
* 'Province No. 2',
* 'Province No. 3',
* 'Gandaki',
* 'Province No. 5',
* 'Karnali',
* 'Sudurpashchim' 
