# PetVar
PetVar === Pocketbase Express Typescript Vite Axios React

PetVar is the fastest way to spin up a Full Stack application (React + Node + PocketBase). Evolution and based off of the Penjar stack. 

## Table of Contents
* Prequisites
* Installation Steps - Local
* Running - Local

## Prerequisites

* Node.js v20.17.0 or greater - https://nodejs.org/en
  * NPM v10.8.2

## Installation Steps - Local

1. Go to https://pocketbase.io/docs/ and download the latest version of PocketBase for your OS
    * These instructions were written using PocketBase v0.22.20 
2. Unzip the zip file downloaded in the previous step
    * You should see a `pocketbase` binary in the unzipped folder
3. Navigate to the database_and_storage directory
4. Place the `pocketbase` binary into the database_and_storage directory
5. Run the `./pocketbase serve` command
    * Note: Running this command will also setup your initial collections and data
6. Navigate to the Admin UI and setup your admin user
    * The admin UI link will display in your terminal, after running the above serve command
7. Navigate to the `users` collection and create a new user
    * This user will be used by your backend server, to connect to pocketbase
8. In your backend directory, create a `.env` with the following structure:
```
POCKETBASE_USER=UsersUsernameFromThePreviousStepHere
POCKERBASER_PASSWORD=UsersPasswordFromThePreviousStepHere
```
9. Terminate running Pocketbase (the command that was run on step 5)
10. Your install is complete. Follow the 'Running - Local' steps below!

## Running - Local

1. Complete the "Installation Steps - Local" from above
2. Open terminal of choice in the run_locally directory
3. Install your dependencies with npm install
4. Run your application with `npm run start`
      * `start:windows`, `start:linux`, and `start:mac` are also available
      * You can update the `start` command in this package.json to match your systems OS
5. Ready to Code!
     * To view your frontend website, on your browser go to: `http://localhost:5173`
     * To call your backend server, use your API client on this URL: `http://localhost:3031`
         * Example: GET `http://localhost:3031/health`
     * To view your database and storage, use these URLS:
        * Admin UI: `http://127.0.0.1:8090/_/`
        * REST API: `http://localhost:8090/api/`

## Running - Cloud
Work in Progress

## FAQ
Work in Progress