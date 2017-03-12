const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const workbook = XLSX.readFile(path.resolve(__dirname, '../docs/city_codes.ods'));
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const city_codes = XLSX.utils.sheet_to_json(sheet); // Format: {code:..,city:...,state:...}

// Convert to more compact form
const compact_codes = {};
city_codes.forEach(item => {
    compact_codes[item.code] = [item.state, item.city];
});

fs.writeFileSync(path.resolve(__dirname, '../lib/city_codes.json'), JSON.stringify(compact_codes));
