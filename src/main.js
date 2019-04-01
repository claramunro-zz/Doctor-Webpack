import Doctor from '../src/doctor';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {

  // NAME INPUT AREA

  $('#formName').submit(function (event) {
    event.preventDefault();

    let inputName = $('#inputName').val();
    console.log(inputName);

    let newDoc = new Doctor(inputName, 0);

    $('#doctorOutputName').empty();
    $('#errorOutputName').empty();

    let promise = newDoc.lookUpByName();

    promise.then(function (response) {
      let mainBody = JSON.parse(response);
      console.log(mainBody);

      let mainbodyData = mainBody.data;
      console.log(mainbodyData);

      if (mainbodyData.length === 0) {
        $('#doctorOutputName').text('No doctor for this search input.');
      } else {
        for (let i = 0; i < mainbodyData.length; i++) {

          // NAME
          $('#doctorOutputName').append(`<h2>${mainbodyData[i].profile.first_name} ${mainbodyData[i].profile.last_name} ${mainbodyData[i].profile.title}</h2>`);

          // ADDRESS
          $('#doctorOutputName').append(`<p><b>Address:</b> ${mainbodyData[i].practices[0].visit_address.street} ${mainbodyData[i].practices[0].visit_address.city} ${mainbodyData[i].practices[0].visit_address.state} ${mainbodyData[i].practices[0].visit_address.zip}</p>`);

          // PHONE
          $('#doctorOutputName').append(`<p><b>Phone:</b> ${mainbodyData[i].practices[0].phones[0].number}</p>`);

          // IMAGE
          $('#doctorOutputName').append(`<img src=${mainbodyData[i].profile.image_url}></img>`);

          $('#doctorOutputName').append(`<p>${mainbodyData[i].specialties[i].description}</p>`);

          // CHECK NEW PATIENTS
          if (`${mainbodyData[i].practices[0].accepts_new_patients}` === `true`) {
            $('#doctorOutputName').append('<p>Accepting New Patients</p>');
          } else {
            $('#doctorOutputName').append('<p>Not Accepting New Patients</p>');
          }

          // CHECK FOR WEBSITE
          if (`${mainbodyData[i].practices.website}` === 'undefined') {
            $('#doctorOutputName').append(`<p>No Website On File</p>`);
          } else {
            $('#doctorOutputName').append(`<p><b>Website:</b>${mainbodyData[i].practices[0].website}</p>`);
          }
        }
      }
    }, function (error) {
      $('#errorOutputName').text(`Error processing your search: ${error.message}`);
    });
  });




  // MEDICAL ISSUE AREA
  $('#formIssue').submit(function (event) {
    event.preventDefault();

    let inputIssue = $('#inputIssue').val();

    let newDoc = new Doctor(0, inputIssue);

    $('#doctorOutputIssue').empty();
    $('#errorOutputIssue').empty();

    let promise = newDoc.lookUpByIssue();

    promise.then(function (response) {
      let mainBody = JSON.parse(response);

      let mainbodyData = mainBody.data;

      if (mainbodyData.length === 0) {
        $('#doctorOutputIssue').text('No doctor information for this medical input.');
      } else {
        for (let i = 0; i < mainbodyData.length; i++) {

          // $('#doctorOutputIssue').append(`<h2>${mainbodyData[i].profile.first_name} ${mainbodyData[i].profile.last_name} ${mainbodyData[i].profile.title}</h2>`);
          $('#doctorOutputName').append(`<h2>${mainbodyData[i].profile.first_name} ${mainbodyData[i].profile.last_name} ${mainbodyData[i].profile.title}</h2>`);

          // SPECIALTY INPUT FOR API?
          $('#doctorOutputIssue').append(`<p>${mainbodyData[i].specialties[i].description}</p>`);
        }
      }
    }, function (error) {
      $('#errorOutputIssue').text(`Error processing your search: ${error.message}`);
    });
  });






});
