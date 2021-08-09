# Linkedin clone [![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#Contributors)

An application imitating Linkedin website, containing its most important functionalities, built with React + Typescript, Firebase, Context API and other technologies (See the [list](#Technologies) below).

# Project Status

This project is currently in legal progress.

# Project Screen Shot(s)

Photos will appear in the future.

# Technologies

- React
- React Hooks
- Typescript
- Context API
- SCSS + BEM
- Material UI
- React Router
- Storybook
- Cypress
- Eslint
- Prettier
- Husky + lint staged
- Stylelint
- Firebase

# Patterns

- SCSS global files
- Router Switch
- Render props
- Use data-testId attributes for testing purposes


# Firebase config

We use environment variables to hide Firebase API keys.

# Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:  
`npm install`

To Run Test Suite:  
`npm run test`

To Start Server:  
`npm start`

To Visit App:  
`localhost:3000/`

# Deployment 

 **Install the `gh-pages` package as a "dev-dependency" of the app.**

`npm install gh-pages --save-dev`

 The commands shown in the following steps can all be issued from within the app's folder.

 **Add some properties to the app's `package.json` file.**
```
 "homepage": "https://billennium-frontend-interns.github.io/linkedin_clone_project"
```
 In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

    
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }


**Generate a *production build* of  app, and deploy it to GitHub Pages.**

`npm run deploy`
    
   App is now accessible at: https://billennium-frontend-interns.github.io/linkedin_clone_project/



# Reflection

We create this application for an internship at Billennium.

We want this application to resemble the original as much as possible and such functionalities as the ability to log in / create an account, add posts, the ability to follow other users and view their profiles

The purpose of creating this application is to see what working in a team on a real project looks like and to improve our programming skills

Application development issues: nothing by now

Status : final development

# ToDo


 * Insert screenshots

# Contributors


<a href="https://github.com/jakub-gosciniak"><img src="https://github.com/jakub-gosciniak.png" width='96px' height='96px'/></a>
<a href="https://github.com/mateusz0612"><img src="https://github.com/mateusz0612.png" width='96px' height='96px'/></a>
<a href="https://github.com/Polo11121"><img src='https://avatars.githubusercontent.com/u/87152087?&v=4' width='96px' height='96px'/></a>
<a href="https://github.com/MatYouKy"><img src='https://avatars.githubusercontent.com/u/76663651?v=4' width='96px' height='96px'/></a> 
