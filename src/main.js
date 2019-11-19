import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Answer } from './flash';

// UI Logic


$(document).ready(function() {

  $("button#opening").click(function() {
    $("div#opening-page").hide();
    $("div#asychronous-div").show();
  });


  $("button#asynch-button").click(function() {
    let asynchAnswer = $("input:radio[name=asynchronous]:checked").val();
    asynchAnswer = parseInt(asynchAnswer);
    let newAnswer = new Answer(asynchAnswer);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 2);
    if (answer === "Correct"){
      $("div#asychronous-div").css("border", "10px solid green");
      $("div#asychronous-div").css("background-color", "seagreen");
      $("button#asynch-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#asychronous-div").hide();
        $("div#correct-answer").hide();
        $("div#display-div").show();
      }, 3000);
    }
    else {
      $("div#asychronous-div").css("border", "10px solid red");
      $("div#asychronous-div").css("background-color", "pink");
      $("button#asynch-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#asychronous-div").hide();
        $("div#wrong-answer").hide();
        $("div#display-div").show();
      }, 3000);
    }
  });


  $("button#display-button").click(function() {
    let answerTwo = $("input:radio[name=hidingClass]:checked").val();
    answerTwo = parseInt(answerTwo);
    let newAnswer = new Answer(answerTwo);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 1);
    if (answer === "Correct"){
      $("div#display-div").css("border", "10px solid green");
      $("div#display-div").css("background-color", "seagreen");
      $("button#display-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#display-div").hide();
        $("div#correct-answer").hide();
        $("div#lexical-div").show();
      }, 3000);
    }
    else {
      $("div#display-div").css("border", "10px solid red");
      $("div#display-div").css("background-color", "pink");
      $("button#display-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#display-div").hide();
        $("div#wrong-answer").hide();
        $("div#lexical-div").show();
      }, 3000);
    }
  });


  $("button#lexical-button").click(function() {
    let answerThree = $("input:radio[name=lexical]:checked").val();
    answerThree = parseInt(answerThree);
    let newAnswer = new Answer(answerThree);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);
    if (answer === "Correct"){
      $("div#lexical-div").css("border", "10px solid green");
      $("div#lexical-div").css("background-color", "seagreen");
      $("button#lexical-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#lexical-div").hide();
        $("div#correct-answer").hide();
        $("div#ternary-div").show();
      }, 3000);
    }
    else {
      $("div#lexical-div").css("border", "10px solid red");
      $("div#lexical-div").css("background-color", "pink");
      $("button#lexical-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#lexical-div").hide();
        $("div#wrong-answer").hide();
        $("div#ternary-div").show();
      }, 3000);
    }
  });


  $("button#ternary-button").click(function() {
    let answerFour = $("input:radio[name=ternary]:checked").val();
    answerFour = parseInt(answerFour);
    let newAnswer = new Answer(answerFour);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 1);
    if (answer === "Correct"){
      $("div#ternary-div").css("border", "10px solid green");
      $("div#ternary-div").css("background-color", "seagreen");
      $("button#ternary-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#ternary-div").hide();
        $("div#correct-answer").hide();
        $("div#webpack-div").show();
      }, 3000);
    }
    else {
      $("div#ternary-div").css("border", "10px solid red");
      $("div#ternary-div").css("background-color", "pink");
      $("button#ternary-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#ternary-div").hide();
        $("div#wrong-answer").hide();
        $("div#webpack-div").show();
      }, 3000);
    }
  });


  $("button#webpack-button").click(function() {
    let answerSix = $("input:radio[name=webpack]:checked").val();
    answerSix = parseInt(answerSix);
    let newAnswer = new Answer(answerSix);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);
    if (answer === "Correct"){
      $("div#webpack-div").css("border", "10px solid green");
      $("div#webpack-div").css("background-color", "seagreen");
      $("button#webpack-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#webpack-div").hide();
        $("div#correct-answer").hide();
        $("div#font-div").show();
      }, 3000);
    }
    else {
      $("div#webpack-div").css("border", "10px solid red");
      $("div#webpack-div").css("background-color", "pink");
      $("button#webpack-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#webpack-div").hide();
        $("div#wrong-answer").hide();
        $("div#font-div").show();
      }, 3000);
    }
  });



  $("button#font-button").click(function() {
    let answerSeven = $("input:radio[name=font]:checked").val();
    answerSeven = parseInt(answerSeven);
    let newAnswer = new Answer(answerSeven);
    let answer = newAnswer.checkAnswer(newAnswer.answer, 3);
    if (answer === "Correct"){
      $("div#font-div").css("border", "10px solid green");
      $("div#font-div").css("background-color", "seagreen");
      $("button#font-button").hide();
      $("div#correct-answer").show();
      setTimeout(() => {
        $("div#font-div").hide();
        $("div#correct-answer").hide();
        $("div#font-div").show();   // Add fourth question to show
      }, 3000);
    }
    else {
      $("div#font-div").css("border", "10px solid red");
      $("div#font-div").css("background-color", "pink");
      $("button#font-button").hide();
      $("div#wrong-answer").show();
      setTimeout(() => {
        $("div#font-div").hide();
        $("div#wrong-answer").hide();
        $("div#font-div").show();   // Add fourth question to show
      }, 3000);
    }
  });



});
