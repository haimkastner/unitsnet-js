const axios = require('axios');
const xml2js = require('xml2js');

const url = 'https://raw.githubusercontent.com/angularsen/UnitsNet/master/UnitsNet/UnitsNet.csproj';

axios.get(url)
    .then(response => {
        const xml = response.data;
        xml2js.parseString(xml, (err, result) => {
            if (err) {
                exit(1);
                console.error('Error parsing XML:', err);
                process.exit(1);
            }

            try {
                const version = result.Project.PropertyGroup[0].Version[0];
                console.log(version);
            } catch (e) {
                console.error('Error extracting version:', e);
                process.exit(1);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching the URL:', error);
        process.exit(1);
    });
