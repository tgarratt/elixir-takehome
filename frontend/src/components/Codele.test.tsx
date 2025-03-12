import { checkWord } from "./Codele";

describe('Codele component', () => {

  test('checkWord should return all true for matching words', () => {
    const word = 'react';
    const guess = 'react';
    const result = checkWord(word, guess);
    expect(result).toEqual([1, 1, 1, 1, 1]);
  });

  test('checkWord should return all false for non-matching words', () => {
    const word = 'react';
    const guess = 'query';
    const result = checkWord(word, guess);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });

  test('checkWord should return both true and false for partial-matching words', () => {
    const word = 'react';
    const guess = 'input';
    const result = checkWord(word, guess);
    expect(result).toEqual([0, 0, 0, 0, 1]);
  });
});

