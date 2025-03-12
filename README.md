# Tech test for Elixir 💻

Created by Tom Garratt

https://www.linkedin.com/in/tom-a-garratt/

This is a React Redux + Typescript application created with Vite and a Django REST backend.

## Spin up the app

1. Install the frontend

   ```bash
   cd frontend && npm install
   ```

2. Install backend

   ```bash
    cd ../backend && pip3 install -r requirements.txt
   ```
   
3. Settings.py

   Replace the SECRET_KEY in settings.py with the one provided by Jack.If you React app does not run on port 5173, make sure to update in this file also.
   
4. Run the application

    While in the 'frontent' repo run
   ```bash
   npm run dev
   ```
   
   While in the backend repo run
    ```bash
   python3 manage.py runsever
   ```

## A brief description

This project displays a wordly style game using a handlful of code related words using TDD.
