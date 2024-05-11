# hibye

This project will simply print hi and bye.

[![Build Status](https://github.com/yusufshakeel/hibye/actions/workflows/ci.yml/badge.svg)](https://github.com/yusufshakeel/hibye/actions/workflows/ci.yml)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/hibye)
[![npm version](https://img.shields.io/badge/npm-0.2.1-blue.svg)](https://www.npmjs.com/package/hibye)
[![npm Downloads](https://img.shields.io/npm/dm/hibye.svg)](https://www.npmjs.com/package/hibye)

## Getting started

```shell
npm i hibye
```

## Import/Require

```typescript
// ESM
import HiBye from 'hibye';
```

```javascript
// CommonJs
const {HiBye} = require("hibye");
```

## Print

```js
const hiBye = new HiBye();
console.log(hiBye.hi());
console.log(hiBye.bye());
```

## Methods

### hi

```javascript
console.log(hiBye.hi()); // hi
```

### hiJson

```javascript
console.log(hiBye.hiJson()); // { message: 'hi' }
```

### bye

```javascript
console.log(hiBye.bye()); // bye
```

### byeJson

```javascript
console.log(hiBye.byeJson()); // { message: 'bye' }
```

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/hibye/blob/main/LICENSE) Copyright (c) 2024 Yusuf Shakeel

### Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)