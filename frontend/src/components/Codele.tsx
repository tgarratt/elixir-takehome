import React, { useState } from "react"
import axios from 'axios';


const Codele = () => {
  const [guess, setGuess] = useState<string>('')
  const [result, setResult] = useState<number[] | null>(null);  // The result from the backend
  const [error, setError] = useState<string | null>(null);

  // have input field which submits word to backend
  // await response which will be in array format [1, 1, 1, 1, 1] depending on score
  // store word and display colours depending on score 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
          console.log(data)
        }else {
          const data = await response.json();
          console.error('Signup failed:', data.error);

        }

    } catch (error) {
        console.error('Error making the POST request:', error);
    }
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="wordGuess">Guess: </label>
        <input value={guess} onChange={(e) => {setGuess(e.target.value)}} name="wordGuess" />
      </form>
    </div>
  )
}

export default Codele
