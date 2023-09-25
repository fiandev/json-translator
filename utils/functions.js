const path = require("path");
const fs = require("fs");
const translate = require("translate-google");

function splitArray(array, numberOfParts) {
  if (numberOfParts <= 0) {
    return "Number of parts must be greater than 0.";
  }

  const partLength = Math.ceil(array.length / numberOfParts);
  const resultParts = [];

  for (let i = 0; i < numberOfParts; i++) {
    const start = i * partLength;
    const end = (i + 1) * partLength;
    resultParts.push(array.slice(start, end));
  }

  return resultParts;
}


const transform = async ({ baseFolder, sourceFile, lang = "id" }) => {
  if (!baseFolder) path.join(__dirname, "./results");
  if (!sourceFile) throw new Error("the 'sourceFile' is undefined !");
  
  let dest = path.resolve(baseFolder);
  let source = fs.readFileSync(sourceFile, "utf8");
  let obj = JSON.parse(source);
  let pathfile = path.join(dest, `${ lang }.json`);
  
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  for (let key in obj) {
    let prevWord = obj[key];
    let res = await translate(prevWord, { to: lang });
    
    obj[key] = res;
    fs.writeFileSync(pathfile, JSON.stringify(obj, null, 2));
    console.log(`${ prevWord } => ${ res }`);
  }
  
  console.log(`${ lang }.json done ✅`);
}

module.exports = {
  splitArray,
  transform
}