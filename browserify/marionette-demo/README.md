## Browserify
---
Browserify will build a concatonated file of the dependency tree.

### Build Process:
---
browserify . -d -o browserified.js
or use grunt plugin


### Dependency Syntax
---
Uses CommonJS Syntax

var MyDependency = require('my-dependency');
module.exports = function() {};

### Setup:
---
`
npm install -g browserify
npm install
`

### Serve:
---
grunt work
http://localhost:8000/index.html



### Links:
---
http://browserify.org/

http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html
