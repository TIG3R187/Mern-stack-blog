const fs = require('fs');
const path = require('path');

const gltfPath = path.join(__dirname, 'public', 'planet', 'scene.gltf');
const texturesDir = path.join(__dirname, 'public', 'planet', 'textures');

const gltf = JSON.parse(fs.readFileSync(gltfPath, 'utf8'));
const images = gltf.images || [];

let allExist = true;

console.log('Checking texture files referenced in scene.gltf:');
images.forEach(img => {
  const texPath = path.join(texturesDir, path.basename(img.uri));
  if (fs.existsSync(texPath)) {
    console.log(`✔ Found: ${img.uri}`);
  } else {
    console.warn(`✖ MISSING: ${img.uri}`);
    allExist = false;
  }
});

if (allExist) {
  console.log('\nAll textures are present and correctly named.');
} else {
  console.warn('\nSome textures are missing or misnamed. Please add/rename them in public/planet/textures/.');
}