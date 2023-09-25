/* including transform function from ./utils/functions.js file */
const { transform } = require("./utils/functions.js");

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