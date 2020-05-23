function generateMarkdown(data) {
  switch (data.license) {
    case "MIT":
      data.license = "https://img.shields.io/badge/license-MIT-green"
    break
    case "Apache":
      data.license = "https://img.shields.io/badge/license-Apache-blue"
    break
    case "Apache 2":
      data.license = "https://img.shields.io/badge/license-Apache%202-blue"
    break
    case "Github":
      data.license = `https://img.shields.io/github/license/${data.username}/${data.repo}?color=g&style=plastic"`
    break    
  }
  
  return `
# ${data.title}
![License Badge](${data.license})

${data.description}

## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[Test](#test)

## Installation:

**How to install the project:** ${data.installation}` +

"\n\n```\n" +
data.installationcode +
"\n```\n\n" +

`## Usage:

${data.usage}

## Credits:

**Credits to contributors:** ${data.credits}

## Test:

**How to test the project:** ${data.test}` +
"\n\n```\n" +
data.testcode +
"\n```" 
}

module.exports = generateMarkdown;
