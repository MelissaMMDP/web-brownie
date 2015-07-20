# Web Brownie

Named after those mischievous brownies of folklore. In folklore, a [brownie](https://en.wikipedia.org/wiki/Brownie_(folklore)) resembles the hob, similar to a hobgoblin. Brownies are said to inhabit houses and aid in tasks around the house (in this case a web development task). However, they do not like to be seen and will only work at night, traditionally in exchange for small gifts of food. Among food, they especially enjoy porridge and honey.

## What it's about

In this build I have attempted to create a simple code base using Node.js, Express, Karma, Jasmine, Gulp, AngularJS and Less.js with a focus on best practices in both web development and web design.

## The approach

This code base is an ongoing project that has evolved over several builds and closely follows the [Angular Style Guide](https://github.com/johnpapa/angular-styleguide) recommended by AngularJS. Next steps for this build are to incorporate E2E tests and, if applicable, a MongoDB data store.

## See it in action

- **NEW** See the Web Brownie build at [http://web-brownie.pancakeapps.com/](http://web-brownie.pancakeapps.com/)
- [Codepen](http://codepen.io/MAustinMMDP/pen/doGbNy) 
- [Plunker](http://embed.plnkr.co/Sog5Sp/preview)

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp
    ```
    
## Installation

- Clone the repo: `git clone https://github.com/MAustinMMDP/web-brownie.git`.
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
web-brownie/
├── src/
│   ├── client/
│       ├── app/
│           ├── color/
│               ├── color.controller.js
│               ├── color.controller.spec.js
│               ├── color.html
│               └── color.module.js
│           ├── core/
│               ├── 404.html
│               ├── core.module.js
│               └── core.route.js
│           ├── home/
│               ├── home.controller.js
│               ├── home.controller.spec.js
│               ├── home.html
│               └── home.module.js
│           ├── layout/
│               ├── footer.html
│               ├── header.html
│               └── layout.module.js
│           └── app.module.js
│       ├── styles/
│           ├── less/
│               ├── animate.less
│               ├── color.less
│               ├── font.less
│               ├── grid.less
│               └── import.less
│           └── styles.less
│       └── index.html
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
├── karma.conf.js
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

## Karma Testing    
        
- `karma start`
    
    Watch for file changes and re-run tests on each change
