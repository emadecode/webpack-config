# webpack-config
Webpack config for building multilingual Template with (TS + SCSS)


After cloning the project on your local machine, There are multiple commands to use:

First, use ```npm install``` to install npm dependencies.

1- Use ```npm start``` command to start project.
2- Use ```npm run host``` command to start project and host for browse on mobile or any other device on your local network. (Don't forget to change ```192.168.1.16``` on package.json to your local IP)
3- Use ```npm run build``` command to build project. (with minified CSS and HTML, and hashed file names)
4- Use ```npm run build-dev``` command to build project for development purposes. (with CSS and HTML and real file names)

For the multilingual template, I added a ```index-rtl.html``` to the ```src``` directory. So, if you don't need that, you can simply remove it and also don't forget to remove it from ```webpack.common.js```. (remove ```index-rtl``` from ```htmlPageNames``` array)
