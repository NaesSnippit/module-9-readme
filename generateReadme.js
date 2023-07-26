const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain how to install the project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use the project:',
    },
    {
      type: 'input',
      name: 'issues',
      message: 'Explain how to report issues:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Explain how to make contributions:',
    },
  ])
  .then((answers) => {
    const readmeTemplate = `
# ${answers.projectName}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Report Issues](#how-to-report-issues)
- [How to Contribute](#how-to-contribute)

## Installation

${answers.installation}

## Usage

${answers.usage}

## How to Report Issues

${answers.issues}

## How to Contribute

${answers.contributing}
`;

    fs.writeFile('README.md', readmeTemplate, (err) => {
      if (err) {
        console.error('Error creating README.md:', err);
      } else {
        console.log('README.md has been generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
