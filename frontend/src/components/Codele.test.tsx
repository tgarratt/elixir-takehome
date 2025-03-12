import { checkWord } from "./Codele";

describe('Codele component', () => {

  test('checkWord should return true for matching words', () => {
    const word = 'react';
    const guess = 'react';
    const result = checkWord(word, guess);
    expect(result).toBe(true);
  });

  test('checkWord should return false for non-matching words', () => {
    const word = 'react';
    const guess = 'query';
    const result = checkWord(word, guess);
    expect(result).toBe(false);
  });

  test('checkWord should return false for words of different lengths', () => {
    const word = 'react';
    const guess = 'reactnative';
    const result = checkWord(word, guess);
    expect(result).toBe(false);
  });
});

