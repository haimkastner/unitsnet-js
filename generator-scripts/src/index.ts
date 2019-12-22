import fse from 'fs-extra';
import { generateUnitsFromUnitsDefinitions } from './units-generator';
import { UnitTypeDefinition } from './models/units-definition';

const unitsJs = `
8 8888      88 b.             8  8 8888 8888888 8888888888 d888888o.             8 8888   d888888o.   
8 8888      88 888o.          8  8 8888       8 8888     .'8888:' '88.           8 8888 .'8888:' '88. 
8 8888      88 Y88888o.       8  8 8888       8 8888     8.'8888.   Y8           8 8888 8.'8888.   Y8 
8 8888      88 .'Y888888o.    8  8 8888       8 8888     '8.'8888.               8 8888 '8.'8888.     
8 8888      88 8o. 'Y888888o. 8  8 8888       8 8888      '8.'8888.              8 8888  '8.'8888.    
8 8888      88 8'Y8o. 'Y88888o8  8 8888       8 8888       '8.'8888.             8 8888   '8.'8888.   
8 8888      88 8   'Y8o. 'Y8888  8 8888       8 8888        '8.'8888. 88.        8 8888    '8.'8888.  
' 8888     ,8P 8      'Y8o. 'Y8  8 8888       8 8888    8b   '8.'8888.'88.       8 888'8b   '8.'8888. 
  8888   ,d8P  8         'Y8o.'  8 8888       8 8888    '8b.  ;8.'8888  '88o.    8 88' '8b.  ;8.'8888 
   'Y88888P'   8            'Yo  8 8888       8 8888     'Y8888P ,88P'    'Y888888 '    'Y8888P ,88P' 

`;

console.info(unitsJs);


const unitsDefinitionsDirectory = '../UnitDefinitions';
const unitsTestinationDirectory = '../src'
const unitsFiles = fse.readdirSync(unitsDefinitionsDirectory);

const unitsDefinitions: UnitTypeDefinition[] = [];

for (const unitFile of unitsFiles) {
    console.info(`Reading & Parsing '${unitFile}' File ...`);

    const unitDefinition = fse.readJSONSync(`${unitsDefinitionsDirectory}/${unitFile}`) as unknown as UnitTypeDefinition;
    unitsDefinitions.push(unitDefinition);
}

console.info(`Generating Units ...`);

generateUnitsFromUnitsDefinitions(unitsDefinitions, unitsTestinationDirectory);

const success = `
_______ _     _ _______ _______ _______ _______ _______
|______ |     | |       |       |______ |______ |______
______| |_____| |_____  |_____  |______ ______| ______|
`;

console.info(success);
