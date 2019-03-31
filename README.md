# Doctor

## Description
Doctor is a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in their city who can treat their medical issue.

## Specifications

* Input: Medical issue | Output: Receive a list of doctors in the Portland area that fit the search query
* Input: Name | Output: Receive a list of doctors in the Portland area that fit the search query
* For all doctor outputs: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.

* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria.

### Setup Instructions
* You will need your own API key for the BetterDoctor API
* Request an API key at https://developer.betterdoctor.com
* Once you have your key, replace "${process.env.exports.apiKey}" with your own API key (remove the $ and curly brackets)

* Clone this repository to your desktop using "git clone""(repository link).""
* Open in preferred text editor to see all code used
* Navigate to project directory
* In your terminal: "$ npm install webpack@4.0.1 --save-dev"
* In your terminal: "$ npm install webpack-dev-server@3.1.0 --save-dev"
* In your terminal: "$ npm i" (assuming all packages needed are in package.JSON file)
* In your terminal: "$ npm run build"
* In your terminal: "$ npm run start" or "$ npm run test"

Make sure you have Node.js installed.

### Known Bugs
* No known bugs

### Languages/Libraries Used
* Better Doctor API
* Javascript
* CSS
* Bootstrap
* jQuery
* Webpack
* Karma / Jasmine
* NPM

### GitHub Repo link
https://github.com/claramunro/doctor

Copyright (c) 2019 Clara Munro
