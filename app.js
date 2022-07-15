let converter = require('json-2-csv');
let fs = require('fs');

const args = process.argv.slice(2);
// Path to JSON
let pathToInput = args[0];
// Path to CSV
let pathToOutput = args[1];

fs.readFile(pathToInput, 'utf-8', function(err, json){    
    let json2csvCallback = function (err, csv) {
        if (err) throw err;
        fs.writeFile(pathToOutput, csv, err => {
            if(err){
                console.error(err)
                return
            }
        });
    };
  
    json = JSON.parse(json)
    converter.json2csv(json.templates, json2csvCallback);
});