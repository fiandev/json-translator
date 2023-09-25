# json translator
simple tools to translated json file for localization easly, based on google translate API

## how to usage

### clone this repository
```bash
# clone this project
git clone https://github.com/fiandev/json-translator

# enter project repository folder
cd json-translator
```

### start localization

to start translation you must edit the index.js, follow instructions below :

```javascript
/* base folder where result is created */
let baseFolder = path.join(__dirname, "./results");

/* path base json to translated */
let sourceFile = path.join(__dirname, "./en.json");

( async () => {
  /* choose target language to translated */
  const languages = ["id", "ru"];
  
  for (let language of languages) {
    await transform({
      lang: language,
      baseFolder: baseFolder,
      sourceFile: sourceFile
    });
  }
})();
```