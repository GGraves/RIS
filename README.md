#Resume Interface System
```
RIS is an opensource MEAN stack application. 
```

- This application serves several purposes:
    * Help users learn the **MEAN** stack.
    * Provide a **skeleton layout** for developers to modify.
    * Implement a project that shows **working knowledge** of **industry standard** frameworks.
    * Leverages Trello's API for practice with **external software integration**.

#TODO (by order of importance):
1. Add random photo selection to the homepage of the app, to display a user's photography.
    * ~~Create node api route.~~
    * ~~Modify the angular Home page controller.~~
2. Work on implementation of Tree UI.
    * Fix layout for the index page, removing any unnecessary elements.
    * Remove unnecessary pages from application, should only have the following:
        * 404
        * HOME
    * Add div-branch elements on HOME page for each of the following:
        * ABOUT
        * PORTFOLIO
        * COMMENT
        * CONTACT
3. Implement comment functionality so that visitors of a user's resume can leave feedback for future visitors to view.
    * Create node api route: "create"
    * Add Trello API integration for pushing fresh comments to trello interface.
    * Add comment aggregation to Homepage route in node controller.
4. Update the css layout for Tree branchs.
    * Image header for content.
    * Element containing user determined information.
6. Specifics for Contact branch.
    * Add button for phone integration.
    * Add button for email integration.
    * Add button for linkedin integration.

#Local Environment Guide:

1. Several different software are needed prior to local execution:
    * Install NVM, on a mac I use [Homebrew][brew].
    ```
    brew install nvm
    ```
    * Add these lines to your .bashrc
    ```
    source $(brew --prefix nvm)/nvm.sh
    export NVM_DIR=~/.nvm
    ```
    * Use NVM to install the current version of node. Check [current version][node].
    ```
    nvm install **current version**
    ```
    * Install NPM
    ```
    brew install npm
    ```  
    * Install Nodemon
    ```
    npm install -g nodemon
    ```
    * Install Bower
    ```
    npm install -g bower 
    ```
    
2. Once you have installed the aformentioned software:
    * [How to fork][fork], or if you know how to fork, [Fork Me][myfork].
    * After cloning a local copy of your forked repo, navigate to the project directory:
    ```
    npm install
    bower install
    ```
    * Run your server locally
    ```
    nodemon server.js
    ```
    * **START HACKING!** 

#Remote Environment Guide:

1. Coming Soon

[brew]:http://brew.sh
[node]:http://nodejs.org
[fork]:https://help.github.com/articles/fork-a-repo
[myfork]:https://github.com/VistaDorada/RIS/fork
