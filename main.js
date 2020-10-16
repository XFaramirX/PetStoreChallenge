//This file basically replaces the last generated report into the index.html file. 

const fs = require('fs');
const path = require('path');

var dir = __dirname + '/newman/'; // your directory
console.log(dir);

var files = fs
  .readdirSync(dir)
  .map(function (v) {
    return { name: v, time: fs.statSync(dir + v).mtime.getTime() };
  })
  .sort(function (a, b) {
    return a.time - b.time;
  })
  .map(function (v) {
    return v.name;
  });

var lastReport = files.pop();
var lastReportDir = dir.concat(lastReport);

var lastReportFile = fs.readFileSync(lastReportDir, (err, data) => {
  if (err) throw err;
  return data;
});

fs.writeFile('index.html', lastReportFile.toString(), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
