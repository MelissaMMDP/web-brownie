# Web Brownie

## What it's about

In this build I have attempted to create a simple code base using Node.js, Express, Gulp, AngularJS and Less.js with a focus on best practices in both web development and web design.

## The approach

This code base is an ongoing project that has evolved over several builds and closely follows the [Angular Style Guide](https://github.com/johnpapa/angular-styleguide) recommended by AngularJS. Next steps for this build are to incorporate unit testing and, if applicable, a MongoDB data store.

## See it in action

- [Codepen](http://codepen.io/MAustinMMDP/pen/doGbNy) 
- [Plunker](http://embed.plnkr.co/Sog5Sp/preview)

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp
    ```
    
## Installation

- Clone the repo: `git clone https://github.com/MAustinMMDP/web-brownie-sans-browser-less.git`.
- Install the following from within the project folder:
    ```bash
    npm install
    ```
    then
    
    ```bash
    bower install
    ```
    
## What's included

Within the download you'll find the following directories and files, logically grouping common assets. You'll see something like this:

```
web-brownie-sans-browser-less/
├── src/
│   ├── client/
│       ├── app/
│           ├── color/
│               ├── color.controller.js
│               ├── color.html
│               └── color.module.js
│           ├── core/
│               ├── 404.html
│               └── core.module.js
│           ├── layout/
│               ├── footer.html
│               ├── header.html
│               ├── layout.module.js
│               ├── shell.controller.js
│               └── shell.html
│           ├── app.config.js
│           ├── app.module.js
│           └── index.html
│       ├── styles/
│           ├── less/
│               ├── animate.less
│               ├── color.less
│               ├── font.less
│               ├── grid.less
│               └── import.less
│           └── styles.less
│   ├── server/
│       └── app.js
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jscsrc
├── .jshintrc
├── bower.json
├── gulp.config.json
├── gulpfile.js
├── LICENSE
├── package.json
└── README.md
```

## Help

- `gulp`

    Displays a list of available gulp tasks
    
## Vet your code

- `gulp vet`

    Analyze all project root and src JavaScript with JSHint and JSCS

## Cleaning Up

- `gulp clean`

    Removes the build and .tmp folders. Alternatively, you can run the following tasks to only target specific file types:
    
    `gulp clean fonts`,
    `gulp clean images`,
    `gulp clean styles`,
    `gulp clean code`  
 
## Serving the Code    
    
- `gulp serve-dev`

    Serves the development code and launches it in a browser using a Node.js and Express web server. While you develop, files are watched and on save will automatically update in the browser using browser-sync.
        
- `gulp serve-build`
    
    The development code is optimized and placed in the build folder then launched in a browser using a Node.js and Express web server. On save of code changes the files will be optimized and browser-sync will reload the browser. 
