## RequireJS
---
RequireJS will asyncronously pull in dependencies as it comes across them.

### Build Process:
---
There is no required build process but there is an optimization using `r.js` that will build a concatonated file based on the dependency tree created for the application


### Dependency Syntax
---
Uses AMD Syntax

define(['my-dependency'], function(MyDependency) {
  return function() {};
});

### Setup:
---
`
npm install
`

### Serve:
---
`
grunt work
http://localhost:8000/index.html
`

### Links:
---
http://requirejs.org/