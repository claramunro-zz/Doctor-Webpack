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

  });





  // MEDICAL ISSUE AREA

  $('#formIssue').submit(function (event) {
    event.preventDefault();

    let inputIssue = $('#inputIssue').val();
    console.log(inputIssue);

  });






});