const csv = require('csv-parser');
const fs = require('fs');

/**
 * Parses a CSV file and returns a promise that resolves with the parsed data.
 * @param {string} filePath - The path of the CSV file.
 * @returns {Promise<Array<Object>>} Parsed CSV rows.
 */
function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
}

module.exports = parseCSV;
