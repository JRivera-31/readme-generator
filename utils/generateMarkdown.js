function generateMarkdown(data) {
  switch (data.license) {
    case "MIT":
      data.license = `https://img.shields.io/badge/github/license/:${data.username}/:${data.repository}`
    break 
  }
  
  return `
  # ${data.title}
  ![License Badge](${data.license})

  ${data.description}

  ## Table of Contents
  - Installation(#installation)
  - Usage(#usage)
  - Credits(#credits)
  - Tests (#tests)

  ## Installation

  How to install the project: 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Tests

  How to test the project:

  ${data.test}
`;
}

module.exports = generateMarkdown;
