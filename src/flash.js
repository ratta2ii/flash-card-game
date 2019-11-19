// Business Logic (export items in this file. Import jQuery here if needed)



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



//
// export function calculateScore(){
//     return `${scoreCounter}/10`;
//   }
