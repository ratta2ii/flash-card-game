import { Answer } from './../src/flash.js';



describe('Answer', () => {
  jest.useFakeTimers();
  let newAnswer;

  beforeEach(function() {
    newAnswer = new Answer(2);
  });

  afterEach(function(){
    jest.clearAllTimers();
  });

  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 2)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 1)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

  test('should return true for correct answer', () => {
    newAnswer.answer = 1;
    expect(newAnswer.checkAnswer(newAnswer.answer, 1)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    newAnswer.answer = 1;
    expect(newAnswer.checkAnswer(newAnswer.answer, 2)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

  test('should return true for correct answer', () => {
    newAnswer.answer = 3;
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

  test('should return true for correct answer', () => {
    newAnswer.answer = 1;
    expect(newAnswer.checkAnswer(newAnswer.answer, 1)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 1)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

  test('should return true for correct answer', () => {
    newAnswer.answer = 3;
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

  test('should return true for correct answer', () => {
    newAnswer.answer = 3;
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual("Correct");
    expect(newAnswer.scoreCounter).toEqual(1);
  });
  test('should return true for correct answer', () => {
    expect(newAnswer.checkAnswer(newAnswer.answer, 3)).toEqual(false);
    expect(newAnswer.scoreCounter).toEqual(0);
  });

});





  //
  // test('should have a food level of 7 after 3001 milliseconds', () => {
  //   jest.advanceTimersByTime(3001);
  //   expect(fuzzy.foodLevel).toEqual(7);
  // });
  //
  //
  // test('should get very hungry if the food level drops below zero', function() {
  //   fuzzy.foodLevel = 0;
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });
  //
  // test('should get very hungry if 10 seconds pass without feeding', function() {
  //   jest.advanceTimersByTime(10001);
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });
  //
  // test('should have a food level of ten if it is fed', function() {
  //   jest.advanceTimersByTime(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
