let apiKey = process.env.exports.apiKey;

export default class Doctor {
  constructor(inputName, inputIssue) {
    this.inputName = inputName;
    this.inputIssue = inputIssue;
  }

  lookUpByName() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let location = "or-portland";
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&skip=0&limit=10&name=${this.inputName}&user_key=${apiKey}`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          alert('Error with the API request');
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }

  lookUpByIssue() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();


      // WHAT IS THE LOOKUP SPECIALTY URL?
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${loation}&location=or-portland&skip=0&limit=11&user_key=${apiKey}`;


      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          alert('Error with the API request');
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }







}
