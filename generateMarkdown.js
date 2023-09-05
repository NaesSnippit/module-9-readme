// Function to return the license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![Static Badge](https://img.shields.io/badge/License-MIT-orange)';
    case 'Apache':
      return '![Static Badge](https://img.shields.io/badge/License-Apache-orange)';
    case 'GPL':
      return '![Static Badge](https://img.shields.io/badge/License-GPL-orange)';
    case 'BSD':
      return '![Static Badge](https://img.shields.io/badge/License-BSD-orange)';
    case 'Mozilla':
      return '![Static Badge](https://img.shields.io/badge/License-Mozilla-orange)';
    case 'none':
      return '';
    default:
      return '';
  }
}

// Function to choose the license description link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '   [Link to license text](https://opensource.org/license/mit/)';
    case 'Apache':
      return '   [Link to license text](https://opensource.org/license/apache-2-0/)';
    case 'GPL':
      return '   [Link to license text](https://opensource.org/license/gpl-2-0/)';
    case 'BSD':
      return '   [Link to license text](https://opensource.org/license/bsd-2-clause/)';
    case 'Mozilla':
      return '   [Link to license text](https://opensource.org/license/mpl-2-0/)';
    case 'none':
      return '';
    default:
      return '';
  }
}

// Function to Generate the license table 
function renderLicenseSection(license) {
  if ((license) && (license !== 'none')) {

    const licenseLink = renderLicenseLink(license);
    const licenseBadge = renderLicenseBadge(license);

    return("" + licenseBadge + licenseLink);
;
  }
  else {
    return ''; //No license
  }
}

// Function to generate the markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## License
${licenseSection}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installInstructions}

## Usage
${data.usage} 

## Contributing
${data.contributions}

## Tests
${data.testing}

## Questions
You may contact me with further questions via GitHub: [${data.userName}](https://github.com/${data.userName})
or send me an email at: ${data.email}
`;
}

module.exports = generateMarkdown;