import fs from 'fs';
import csv from 'csv-parser';
import type { Table62Table1Data } from './types';

const results: Table62Table1Data[] = [];

const readEmploymentChange = (filePath: string) => {
  let i = 0;
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data: Table62Table1Data) => {
      if (data['Employment change, percent, 2023–33']) {
        results.push({
          id: i,
          enabled: false,
          '2023 National Employment Matrix title':
            data['2023 National Employment Matrix title'],
          'Employment change, percent, 2023–33':
            data['Employment change, percent, 2023–33'],
        });
        i++;
      }
    })
    .on('end', () => {
      fs.writeFileSync(
        'src/data/table62Table1Data.json',
        JSON.stringify(results)
      );
      console.log('JSON for Table 6.2-Table 1 has been created.');
    });
};

let filePath = 'data/Table 6.2-Table 1.csv';

try {
  if (process.argv.length == 3) {
    filePath = process.argv[1].includes('data')
      ? process.argv[1]
      : `data/${process.argv[1]}`;
  }
  readEmploymentChange(filePath);
} catch (err) {
  console.error(err);
}
