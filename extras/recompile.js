const {readFileSync, writeFileSync} = require("fs"), {log} = require("console"), INI = require("ini");
const data = readFileSync("./dicewire.stack").toString().trim();
let stringMap = new Map(data.split("\n").map((substring) => substring.split("\t")));
let obj = Object.fromEntries(stringMap);
let ini = INI.stringify(obj);
let json = JSON.stringify(obj);
writeFileSync("./dtb/data.ini", ini);
writeFileSync("./dtb/data.json", json);