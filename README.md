# UML-Diagram-Editor
A UML Diagram Editor to help you organize and visualize your systems

There are several steps you must take in order to compile and run this project on your machine:
1. Download Nodejs, https://nodejs.org/en/
2. Clone this repo/download it to your machine
3. Navigate to the project directory via your command line and type 'npm install' to install all of the required dev modules including a large chunk of node dependencies
4. Typing 'npm run build' will build the project as ./dist/main.js
5. Navigate to ./dist and open 'terminal.html' to use the Command-Line Interface(CLI) version of this application, or open 'gui.html' to use the Graphical Interface (GUI) version that is available
6. Note that building the project compiles the Typescript files into Javascript files that the HTML/CSS files depend on, you will not be able to open the software if you don't compile them into JS files first

If it interests you, you can run the unit tests by typing 'npm run test', however this doesn't build a main.js file
