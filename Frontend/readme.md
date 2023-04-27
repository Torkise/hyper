# T08 - Template (GH-Pages)

This is the implementation of the project for GitHub-Pages

## Preliminary steps
As usual, the first things to do are:
- moving inside the folder with the terminal (or opening the project with VSCode) and then using:

      npm install

- To run the project you have to use:

      npm run dev

    or

      npm run dev -- -o
    
    to automatically open your project in a new tab of your browser.

## Configuration
To make the project work on GH-Pages there are a few steps to do:
- install gh-pages

      npm install gh-pages --save-dev

- add commands to the package.json file:

      script: {
        deploy: "gh-pages -d dist --dotfiles"
      }
  The "--dotfiles" option allows to push files starting with "." to the repo. This way it is possible to push the .nojekyll file.

- add an empty .nojekyll file in the public folder
- add the baseURL with the name of your repository in the nuxt.config.ts file:

      app: {
        baseURL: "/<name of the repo>"
      }

## Local Serve
To help in testing the project, some additional script have been added to the package.json file.

If you want to test the project locally you can use the added command:

      npm run generate-local

This set the DEV environmnet variable. This is used in the nuxt.config.ts file to fix an issue with the local serving of the project. This is the new app field:

      app: {
        // Checking environment variable to decide root
        baseURL: process.env.DEV? '' : '/Name-of-Repo'
      }

When the project is ready, you can use:

      npx serve dist

The command

      npm run dev

works properly even if the DEV environment variable hasn't been set.
  
## Deployment
- When you want to generate the project for deployment use:
  
      npm run generate

- Then, to push the generated project, use:

      npm run deploy

  If you are using the same repo for the backend and frontend (as shown in this repository) you might have problem running this command as the git reference are on the root folder of the project. There are additional options that can be added to the gh-pages command (like the --dotfiles) that allow you to connect to your repository.
  You can find the list of available options by using:

      npx gh-pages --help
  
  For example, "--repo" allows you to set the link of your repository.

## Content
The project contains:
- 5 components
  - Card
  - SmallCard
  - TextImage
  - TheFooter
  - TheHeader
- 1 layout: default
- 1 error page (currently it's not displayed properly when the project is generated)
- 7 pages reachable at:
  - /
  - /contact
  - /about
  - /dogs
  - /dogs/:id
  - /locations
  - /locations/:id
- The server (the same that was available in a previous repository)

Most of the content is commented to explain how things works.
