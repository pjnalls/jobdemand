import https from 'https';
import fs from 'fs';

const fileUrl = 'https://www.bls.gov/emp/skills/skills.xlsx';
const destination = `data/skills.xlsx`;

const file = fs.createWriteStream(destination);

https
  .get(fileUrl, (response) => {
    response.pipe(file);
    file.on('finish', () =>
      file.close(() => console.log('File downloaded successfully'))
    );
  })
  .on('error', (err) =>
    fs.unlink(destination, () => console.error('Error downloading file:', err))
  );
