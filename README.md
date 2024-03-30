# Netflix GPT 

- Installing Create React App (open folder in cmd > run "npx create-react-app netflix-gpt")
- Installing tailwind using the guide on tailwinds site for create react app
- Build Header
- Routing (Installing rect-router-dom)
- Build Login Form
- conifg Sign up Form 
- to create forms easily we can go to site 
    [Formic](https://formik.org/)
- Form Validation
- Using Firebase as backend
- Installing Redux to keep user data
- update profile
- Fixing Bugs 
- adding constants 
- Using TMDB Database for movies
- put the data in store (Creating MovieSlice)
- create custom hooks for fetching and adding on redux
- dividing our browse to two components(Main maovie and Secondary )
- Creating the main Movie Component
    - adding Video Title 
    - adding video bg
        - from tmdb website to get videos
        - to update our trailer we will use redux of movieSlic
- using diffrent css for data from youtube(making it autoplay and mute)
- Building Secondary Component
- creating one card
    - using CDN url given by tmdb (serach in guides >> images >> basics)
    - Updating Movie List
- Creating GPT Search page 
- Using Language Constants (Multi Language Feature)
- Integrating GPT API


## Features
- Login/SignUp
    - Sign In / Sign Up Form
    - redirect to browse page
- Browse (After Autentication)
    - Header 
    - Main Movie 
        - Trailer in bg
        - Title and Description
    - Movie Suggestions 
        - MoviesLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions


## UseRef Hook
- we can get the data inside some input and can store it in a variable 
- check login.js where it is used

## Using FireBase 
- create a project on firebase site 
- now select web app on site
- install the given npm on out terminal
- in utils create firebase.js 
- add the given files
- npm install -g firebase-tools
- firebase lagin 
- firebase init
    - hosting (optionaly on github)
    - exissting project
    - select project
    - What do you want to use as your public directory? Build (because all the files go here like in parcel it use to go in DIST Folder)
    - Configure as a single-page app (rewrite all urls to /index.html)? No
    - Set up automatic builds and deploys with GitHub? No
- npm run build (to create a build folder )
- firebase deploy

## SIgn IN and Sign Up
- go to firebase documentation >> Search for Authentication >> go to web >> password authentication and use the code
- we will write the const getAuth.. in our main firebase.js cause it will be used everywhere and we will import it then 
- copy the code using correct credentials of email and password(email.current.value,password.current.value)
- Now you can find a user on your firebase project 

## Manage user on Fire base
- now we need our user on store 
- there is option in firebase documentation >> in authentication >> Manage Users
- add this code in our body
- dispatch that data to redux store 
- we will use useNavigate hook to navigate to /browse

## To Sign out
- from password authentication in firebase documentation
- we can also find update profile also here to display name and image 

## FIxing a bug 
- the last time when we are authenticating and moviing to browse page using navigate it shows a error 
- that navigate can be used inside router provider and our auth is in body
- but header is used everywhere
- so we add this auth component in header 
- now if a user is logged in he will be logged in 
- and he will not be able to go to login page until he sign out


## Unsuscribing the user after auth
- to do this we will add a return in useeffect (we learned this in class based component it is like a destructor)
- in firebase it is said that if we keep OnAuthChange inside a fuction and call it after useEffect

## TMDB
- register on it
- we will use the now playing api
- we need to add a constant which is our autherization key
- and then fetch our api

// React Strict mode - we usually se our useeffect is called twice ,we get two objects when fecthing is done 
- this is because of react strict mode in index .js 
- this will only happen in our local

