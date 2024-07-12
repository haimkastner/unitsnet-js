// Function to parse version string to major, minor, patch
const parseVersion = (version) => {
    const [major, minor, patch] = version.split('.').map(Number);
    return { major, minor, patch };
};

// Function to increment the version
const incrementVersion = (currentVersion, definitionVersion, currentDefinitionVersion) => {
    const current = parseVersion(currentVersion);
    const definition = parseVersion(definitionVersion);
    const currentDefinition = parseVersion(currentDefinitionVersion);

    if (currentDefinition.major > definition.major) {
        // Increment major version
        return `${current.major + 1}.0.0`;
    } else {
        // Increment patch version
        return `${current.major}.${current.minor}.${current.patch + 1}`;
    }
};

// Get the current version from command line arguments
const [currentVersion, definitionVersion, currentDefinitionVersion] = process.argv.slice(2);

if (!currentVersion || !definitionVersion || !currentDefinitionVersion) {
    console.error('Please provide the current version & definition version & current definition version as an argument.');
    process.exit(1);
}

const newVersion = incrementVersion(currentVersion, definitionVersion, currentDefinitionVersion);
console.log(newVersion);