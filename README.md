# Link-sharing app
![preview](https://github.com/Tjanelidze/SPGT/assets/84060643/b52f99cb-7fac-42f4-a5d2-29943c579eae)


## Live: [link-sharing](https://spgt-b489df8b0cfa.herokuapp.com/)

## Overview
This repository contains the code for a web application that allows users to register, login, share links, and view their profile details. The project uses Python Flask for the backend and HTML, CSS, and JavaScript for the frontend.

Pages
Registration and Login: Users can register for a new account with their email , and password. Registered users can log in using their email and password.
          -When a user submits the registration form, your Flask route should receive the form data (email, password).
          -Check if the provided email already exists in the database. If it does, return an error message.
          -Store the user's information (email and hashed password) in the database.

Add New Link: On this page, users can add new links by providing the platform and the link itself. Users can add a maximum of 5 links.

Platform Cards: Users can see their added links organized by platform on the left side of the page. Clicking on a platform card will redirect the user to the associated link.

Profile Details: Users can upload an avatar picture, first name, last name, and optionally provide their email.

Preview: This page displays a preview of the user's profile details, including the avatar, first name, last name, email (if provided), and the link cards.

Database
User registration and login information, are stored in a database.

Backend
The backend of this project is built using Python Flask, which handles user authentication.

### Getting Started
To set up the LinkShare project, follow these steps:

Clone the repository to your local machine.
Set up a virtual environment for Python.
Install the required Python packages listed in the requirements.txt file using pip install -r requirements.txt.
Run the Flask application to start the backend.
Dependencies
The project uses Python Flask for the backend, while the frontend is built using HTML, CSS, and JavaScript. No external libraries or dependencies are required.

## Authors
##### Mentor: <a href="https://github.com/Tjanelidze" target="_blank" rel="noreferrer"> Tedo Janelidze </a><br/>
##### Students: ( <a href="https://github.com/SabaPipia" target="_blank" rel="noreferrer"> Saba Pipia </a>, <a href="https://github.com/papunafshaveli" target="_blank" rel="noreferrer"> Papuna Fshaveli </a>, <a href="https://github.com/GiorgiGobb29" target="_blank" rel="noreferrer"> Giorgi Gobadze </a>)
