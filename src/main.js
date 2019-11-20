import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Answer } from './flash';

// UI Logic

$(document).ready(function() {

  let newAnswer = new Answer();

  $("button#start").click(function() {
    $("div#opening-page").hide();
    $("div#asychronous-div").show();
  });


  $("button#asynch-button").click(function() {

    let asynchAnswer = $("input:radio[name=asynchronous]:checked").val();
    asynchAnswer = parseInt(asynchAnswer);
    newAnswer.answer = asynchAnswer;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 2);

    if (answer === "Correct"){
      $("div#asychronous-div").css("border", "10px solid green");
      $("div#asychronous-div").css("background-color", "lightgreen");
      $("button#asynch-button").hide();
      setTimeout(() => {
        $("div#asychronous-div").hide();
        $("div#display-div").show();
      }, 1000);
    }
    else {
      $("div#asychronous-div").css("border", "10px solid red");
      $("div#asychronous-div").css("background-color", "pink");
      $("button#asynch-button").hide();

      setTimeout(() => {
        $("div#asychronous-div").hide();
        $("div#display-div").show();
      }, 1000);
    }
  });


  $("button#display-button").click(function() {

    let answerTwo = $("input:radio[name=hidingClass]:checked").val();
    answerTwo = parseInt(answerTwo);
    newAnswer.answer = answerTwo;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 1);

    if (answer === "Correct"){
      $("div#display-div").css("border", "10px solid green");
      $("div#display-div").css("background-color", "lightgreen");      $("button#display-button").hide();
      setTimeout(() => {
        $("div#display-div").hide();
        $("div#lexical-div").show();
      }, 1000);
    }
    else {
      $("div#display-div").css("border", "10px solid red");
      $("div#display-div").css("background-color", "pink");
      $("button#display-button").hide();
      setTimeout(() => {
        $("div#display-div").hide();
        $("div#lexical-div").show();
      }, 1000);
    }
  });


  $("button#lexical-button").click(function() {

    let answerThree = $("input:radio[name=lexical]:checked").val();
    answerThree = parseInt(answerThree);
    newAnswer.answer = answerThree;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);

    if (answer === "Correct"){
      $("div#lexical-div").css("border", "10px solid green");
      $("div#lexical-div").css("background-color", "lightgreen");
      $("button#lexical-button").hide();
      setTimeout(() => {
        $("div#lexical-div").hide();
        $("div#ternary-div").show();
      }, 1000);
    }
    else {
      $("div#lexical-div").css("border", "10px solid red");
      $("div#lexical-div").css("background-color", "pink");
      $("button#lexical-button").hide();
      setTimeout(() => {
        $("div#lexical-div").hide();
        $("div#ternary-div").show();
      }, 1000);
    }
  });


  $("button#ternary-button").click(function() {

    let answerFour = $("input:radio[name=ternary]:checked").val();
    answerFour = parseInt(answerFour);
    newAnswer.answer = answerFour;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 2);

    if (answer === "Correct"){
      $("div#ternary-div").css("border", "10px solid green");
      $("div#ternary-div").css("background-color", "lightgreen");
      $("button#ternary-button").hide();
      setTimeout(() => {
        $("div#ternary-div").hide();
        $("div#image-div").show();
      }, 1000);
    }
    else {
      $("div#ternary-div").css("border", "10px solid red");
      $("div#ternary-div").css("background-color", "pink");
      $("button#ternary-button").hide();
      setTimeout(() => {
        $("div#ternary-div").hide();
        $("div#image-div").show();
      }, 1000);
    }
  });


  $("button#image-button").click(function() {

    let answerFive = $("input:radio[name=image]:checked").val();
    answerFive = parseInt(answerFive);
    newAnswer.answer = answerFive;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);

    if (answer === "Correct"){
      $("div#image-div").css("border", "10px solid green");
      $("div#image-div").css("background-color", "lightgreen");
      $("button#image-button").hide();
      setTimeout(() => {
        $("div#image-div").hide();
        $("div#webpack-div").show();
      }, 1000);
    }
    else {
      $("div#image-div").css("border", "10px solid red");
      $("div#image-div").css("background-color", "pink");
      $("button#image-button").hide();
      setTimeout(() => {
        $("div#image-div").hide();
        $("div#webpack-div").show();
      }, 1000);
    }
  });


  $("button#webpack-button").click(function() {

    let answerSix = $("input:radio[name=webpack]:checked").val();
    answerSix = parseInt(answerSix);
    newAnswer.answer = answerSix;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);

    if (answer === "Correct"){
      $("div#webpack-div").css("border", "10px solid green");
      $("div#webpack-div").css("background-color", "lightgreen");
      $("button#webpack-button").hide();
      setTimeout(() => {
        $("div#webpack-div").hide();
        $("div#font-div").show();
      }, 1000);
    }
    else {
      $("div#webpack-div").css("border", "10px solid red");
      $("div#webpack-div").css("background-color", "pink");
      $("button#webpack-button").hide();
      setTimeout(() => {
        $("div#webpack-div").hide();
        $("div#font-div").show();
      }, 1000);
    }
  });


  $("button#font-button").click(function() {

    let answerSeven = $("input:radio[name=font]:checked").val();
    answerSeven = parseInt(answerSeven);
    newAnswer.answer = answerSeven;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 1);

    if (answer === "Correct"){
      $("div#font-div").css("border", "10px solid green");
      $("div#font-div").css("background-color", "lightgreen");
      $("button#font-button").hide();
      setTimeout(() => {
        $("div#font-div").hide();
        $("div#ajax-div").show();
      }, 1000);
    }
    else {
      $("div#font-div").css("border", "10px solid red");
      $("div#font-div").css("background-color", "pink");
      $("button#font-button").hide();
      setTimeout(() => {
        $("div#font-div").hide();
        $("div#ajax-div").show();
      }, 1000);
    }
  });


  $("button#ajax-button").click(function() {

    let answerEight = $("input:radio[name=ajax]:checked").val();
    answerEight = parseInt(answerEight);
    newAnswer.answer = answerEight;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 1);

    if (answer === "Correct"){
      $("div#ajax-div").css("border", "10px solid green");
      $("div#ajax-div").css("background-color", "lightgreen");
      $("button#ajax-button").hide();
      setTimeout(() => {
        $("div#ajax-div").hide();
        $("div#both-div").show();
      }, 1000);
    }
    else {
      $("div#ajax-div").css("border", "10px solid red");
      $("div#ajax-div").css("background-color", "pink");
      $("button#ajax-button").hide();
      setTimeout(() => {
        $("div#ajax-div").hide();
        $("div#both-div").show();
      }, 1000);
    }
  });


  $("button#both-button").click(function() {

    let answerNine = $("input:radio[name=both]:checked").val();
    answerNine = parseInt(answerNine);
    newAnswer.answer = answerNine;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);

    if (answer === "Correct"){
      $("div#both-div").css("border", "10px solid green");
      $("div#both-div").css("background-color", "lightgreen");
      $("button#both-button").hide();
      setTimeout(() => {
        $("div#both-div").hide();
        $("div#blocking-div").show();
      }, 1000);
    }
    else {
      $("div#both-div").css("border", "10px solid red");
      $("div#both-div").css("background-color", "pink");
      $("button#both-button").hide();
      setTimeout(() => {
        $("div#both-div").hide();
        $("div#blocking-div").show();
      }, 1000);
    }
  });


  $("button#blocking-button").click(function() {

    let answerTen = $("input:radio[name=blocking]:checked").val();
    answerTen = parseInt(answerTen);
    newAnswer.answer = answerTen;
    let answer = newAnswer.checkAnswer(newAnswer.answer, 2);

    if (answer === "Correct"){
      $("div#blocking-div").css("border", "10px solid green");
      $("div#blocking-div").css("background-color", "lightgreen");
      $("button#blocking-button").hide();
      setTimeout(() => {
        $("div#blocking-div").hide();
        $("div#results-div").show();
        $("span#results-text").text(`${newAnswer.scoreCounter}/10`);

// API -------------

        let request = new XMLHttpRequest();
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=H9xcd2Vx1qYXBMKrncnPTaROnSYsoK83&limit=25&rating=G&q=cheeseburgers`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            getElements(response);
          }
        }

        request.open("GET", url, true);
        request.send();

        const getElements = function(response) {
          let gif = response.data[0].images.downsized_medium.url;
          $('#display-gif').html(`<img src="${gif}" alt="gif">`);
        }

// Api End (Note: the same code in the else statement)

      }, 1000);
    }
    else {
      $("div#blocking-div").css("border", "10px solid red");
      $("div#blocking-div").css("background-color", "pink");
      $("button#blocking-button").hide();
      setTimeout(() => {
        $("div#blocking-div").hide();
        $("div#results-div").show();
        $("span#results-text").text(`${newAnswer.scoreCounter}/10`);

        let request = new XMLHttpRequest();
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=H9xcd2Vx1qYXBMKrncnPTaROnSYsoK83&limit=25&rating=G&q=cheeseburgers`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            getElements(response);
          }
        }

        request.open("GET", url, true);
        request.send();

        const getElements = function(response) {
          let gif = response.data[0].images.downsized_medium.url;
          $('#display-gif').html(`<img src="${gif}" alt="gif">`);
        }
      }, 1000);
    }
  });

});
