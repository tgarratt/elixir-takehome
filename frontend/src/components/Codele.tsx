import React, { useState } from "react"

interface Guess {
  guess: string;
  score: number[];
}

const Codele = () => {
  const [guess, setGuess] = useState<string>('')
  const [guessedList, setGuessedList] = useState<Guess[]>([])
  const [correct, setCorrect] = useState<boolean>(false)
  const [error, seterror] = useState<string>('')

  // have input field which submits word to backend
  // await response which will be in array format [1, 1, 1, 1, 1] depending on score
  // store word and display colours depending on score 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(correct){
      seterror('Answer already guessed, click the reset button to try again')
      return;
    }

    if(guess.length !== 5){
      seterror('Please provide an word 5 characters long')
      return;
    }

    try{

        const response = await fetch(`http://localhost:8000/api/check-word`,{
        method: 'POST',
        headers: new Headers({
            "Content-Type": 'application/json'
        }),
        credentials: 'include',
        body: JSON.stringify({
            guess: guess,
        })
        })

        if(response.ok) {
          const data = await response.json();
          setGuess('');
          seterror('')
          setGuessedList([...guessedList, {guess: data.guess, score: data.result}]);
          if(data.result.every((value: number) => value === 1)){
            setCorrect(true)
          }
        }else {
          console.error('Error with the response, please try again');
        }

    } catch (error) {
        console.error('Error making the POST request:', error);
    }
}

const handleReset = async (event: React.FormEvent) => {
  event.preventDefault();
  try{

      const response = await fetch(`http://localhost:8000/api/reset-word`,{
      method: 'POST',
      headers: new Headers({
          "Content-Type": 'application/json'
      }),
      credentials: 'include',
      })

      if(response.ok) {
        setGuess('');
        seterror('')
        setCorrect(false)
        setGuessedList([]);
      }else {
        console.error('Error with the response, please try again');
      }

  } catch (error) {
      console.error('Error making the POST request:', error);
  }
}


const handleLetterBackground = (score: number) => {
  if(score === 1){
    return 'green'
  } else if(score === 2){
    return 'orange'
  }
  return 'red'
}

  return (
    <div className="App">
      <button onClick={handleReset}>Reset hidden word</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wordGuess">Guess: </label>
        <input value={guess} onChange={(e) => {setGuess(e.target.value)}} name="wordGuess" />
        <button type="submit">Try guess</button>
      </form>
      {error && <p>{error}</p>}
      {guessedList.map((previousGuess, index) => (
        <div style={{display: 'flex', justifyContent: 'center'}} key={index}>
          {previousGuess.guess.split('').map((letter, letterIndex) => (
            <p
              style={{
                backgroundColor: handleLetterBackground(previousGuess.score[letterIndex]),
                padding: 10,
                margin: 5
              }}
              key={letterIndex}
            >
              {letter}
            </p>
          ))}
        </div>
      ))}
      {correct && <p>Wooooooooo, you got it!</p>}
    </div>
  )
}

export default Codele
