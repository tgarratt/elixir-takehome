import React from "react"

export const checkWord = ((word : string, guess: string): number[] => {
  return guess.split('').map((letter, index) => {
    const strictMatch =  word[index] === letter ? 1 : 0;
    if(strictMatch === 0){
     return  word.includes(letter) ? 2 : 0
    } else {
      return 1
    }
  });
})

const Codele = () => {

  // Recieve random word from backend
  // Store word in slice
  // Create UI with inputs
  // On submit break down the imput and compare to stored word
  // Relay relevent information (if the letter is red, green or amber)

  return (
    <div className="App">
        Codele
    </div>
  )
}

export default Codele
