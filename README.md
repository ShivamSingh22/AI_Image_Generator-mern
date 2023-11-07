# AI_Image_Generator-mern
MERN based AI image generator app just like Midjourney and Dall-E.
This project is built using mern stack where I have created a web app which can create ai generated images by giving a prompt as an input to it and 
after creating it you can share it as a post on community also you can manage your created posts.

## How to start

Clone repository in your ide make sure you have your own cloudinary,openAi api keys and also nodejs,mongodb atlas uri

Now create a .env backend file with these variables
URI=
OPENAI_API_KEY=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

After this go to backend directory and type npm install in your terminal
nodemon server.js to start server

Now go to frontend directory and type npm install in your terminal
npm run dev to start react project

go to localhost:3000 to view the whole web application

## Features

### Create-post Page

On the Create-post page, users can generate images by entering their name and prompt of their choice, then clicking the "Generate" button. After the image is generated, users can choose to share it with the community by clicking the "Share with Community" button.

![App Screenshot](https://res.cloudinary.com/dhaoxpvz2/image/upload/v1678771242/Screenshot_2023-03-14_at_10.20.52_AM_wbfirq.png)


### Home Page

On the Home page, users can view all of the images that have been shared by the community. Users can hover over the images to download them or view their details. There is also a search function available to help users find specific posts by names and prompts.

![App Screenshot](https://res.cloudinary.com/dhaoxpvz2/image/upload/v1678771243/Screenshot_2023-03-14_at_10.20.38_AM_ljd1oq.png)


## Live Demo

You can access the live demo of DALL-E Beta at the following 

link : https://dall-e-beta.netlify.app/ 

If it take some time to load please be patient.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS

  Made with ❤️ by Shivam
