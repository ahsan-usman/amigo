const fs = require('fs');
const file = 'd:/Ahsan/personal/AmigoFarm/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const startMatch = content.match(/\s*\{\/\* Operations \*\/\}/);
const endMatch = content.match(/\s*\{\/\* Quality Assurance \*\/\}/);

if (startMatch && endMatch) {
  const startIndex = startMatch.index;
  const endIndex = endMatch.index;
  
  const opsContent = content.substring(startIndex, endIndex);
  
  content = content.slice(0, startIndex) + content.slice(endIndex);
  
  const insertMatch = content.match(/\s*\{\/\* About Us \*\/\}/);
  
  if (insertMatch) {
    const insertIndex = insertMatch.index;
    content = content.slice(0, insertIndex) + opsContent + content.slice(insertIndex);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully moved Operations section!');
  } else {
    console.log('Could not find About Us section');
  }
} else {
  console.log('Could not find boundaries for Operations section');
}
