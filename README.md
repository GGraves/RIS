#Resume Interface System
```
RIS is an opensource MEAN stack application. 
```

- This application serves several purposes:
    * Help users learn the **MEAN** stack.
    * Provide a **skeleton layout** for developers to modify.
    * Implement a project that shows **working knowledge** of **industry standard** frameworks.
    * Leverages Trello's API for practice with **external software integration**.

#TODO:

1. Link TreeUI externally and remove jquery within angular controller.

2. Add a how-to guide for integrating Trello.

3. Add the Remote Environment Guide for Nodejitsu usage.

4. Clean and refine Local Environment Guide.

5. Update Blog.


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
