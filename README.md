# Community Album App - Full stack application
The app has a database in the backend and for the front end uses React+Redux JS. The app needs a user to login and then they can view all the images in the database. To add images, a user needs to login.

## Setup

Download the files in a directory using git clone and copying the link from github. Then navigate to the right directory and type npm install in the console, both for client and server. Then follow the steps below.

Client : Once dependencies are installed, start the application by typing npm run start in the console.

Server : Before starting the server, we need to make a container to connect to our PostgreSQL database. First, make a docker container running on port 5432, followed by running the server with node/nodemon index.js. 

# Table of Contents
1. [Features](#features)
2. [Used techniques](#used-techniques)
3. [Learning goals](#learning-goals)
4. [Screen captures](#screen-captures)

<a name="features"></a>
## Features
- The app has a homepage with a welcome page with a signup, login and images button. 
- A user can view images without logging in but to upload an image, they need to login.
- Existing users can login and upload pics otherwise users need to signup. 
- If a non logged in user clicks on the upload image button, they are redirected to the login page.

<a name="used-techniques"></a>
## Used techniques
- React
- Redux
- [Dog API](https://dog.ceo/dog-api/documentation/)
- PostGreSQL
- Docker
- Sequelize
- Dbeaver for database(Ubuntu)

<a name="learning-goals"></a>
## Learning goals
- Practice React, Redux & React-router
- Practice setting up the backend 
- Using JWT as authorization and implementing it across multiple routers
- Synchronize backend with the frontend for working of the app

<a name="screen-captures"></a>
## Screen captures

![communityAlbumApp](https://user-images.githubusercontent.com/54192886/69140260-7456cc00-0ac2-11ea-9812-325158f431a7.gif)

