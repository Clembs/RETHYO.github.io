//@ts-check
import { readdirSync, writeFileSync } from 'fs';

const projectDirPath = './assets/projects';
const rawDirPath = `${projectDirPath}/raw`;
const thumbDirPath = `${projectDirPath}/thumbnails`;
const projectFileNames = readdirSync(rawDirPath);

const projectArray = projectFileNames.map((f) => ({
  url: `${rawDirPath}/${f}`,
  thumb: `${thumbDirPath}/${f
    .replace('.png', '-small.png')
    .replace('.mp4', '-small.png')}`,
}));

writeFileSync(`projects.json`, JSON.stringify(projectArray));

writeFileSync(
  `projects.js`,
  `const projects = ${JSON.stringify(projectArray, null, 2)};`
);

console.log(projectArray);
