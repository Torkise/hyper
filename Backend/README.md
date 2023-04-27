# Backend
## Content
The project is already set up with all the dependencies. Once downloaded/cloned, move in the folder using the terminal (or open the project using VSCode so that the terminal is already in the correct folder) and then call:

    npm install

This will ensure that all the dependencies are downloaded and available for the project.

When everything is ready, use:

    node index.js

This will start the server. The server listen on port 3001 and the following endpoint are available:

- GET
  - /dogs - Returns all the dogs 
  - /dogs/:id - Returns information about one dog specified by ID
  - /locations - Returns all the locations
  - /locations/:id - Returns information about one location specified

Additionally, the CORS policy is already set up to accept requests from origin "http://localhost:3000".