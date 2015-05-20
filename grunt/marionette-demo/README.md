## Grunt Build

Grunt is a task runner which has become the standard way to run processing jobs against Javascript.  In this project, grunt will concatonate our dependencies into 1 file.

Grunt can do other tasks such as minify the contents but minification has not been used in this project to keep a bit of consistency across demos.

### Build Process:
Dependencies are listed in the Gruntfile. Grunt work command will kick off the build process and files we be re-concatonated as the source files change.

### Setup:
`
npm install
`

### Serve:
grunt work
http://localhost:8000/index.html


