const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../dist');
const targetDir = path.join(__dirname, '../deployment-output');

if(!fs.existsSync(sourceDir)){
    console.error('dist folder not found, Run build first.');
    process.exit(1);
}

if(!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir);
}

fs.cpSync(sourceDir, targetDir, { recursive: true });
console.log('Deployment successful! Files copied to deployment-output folder.');