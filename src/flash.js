import $ from 'jquery';

export class Answer {
  constructor(answer) {
    this.answer = answer;
    this.scoreCounter = 0;
  }

  checkAnswer(inputtedAnswer, correctAnswer) {
    if (inputtedAnswer === correctAnswer){
      this.scoreCounter += 1;
      return "Correct";
    }
    else {
      return false;
    }
  }
}
