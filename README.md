# Web Brownie

Named after those mischievous [brownies](https://en.wikipedia.org/wiki/Brownie_(folklore)) of folklore.

## Table of Contents

  1. [About](#about)
  1. [Example](#example)
  1. [Prerequisites](#prerequisites)
  1. [Installation](#installation)
  1. [Contents](#contents)
  1. [Tasks](#tasks)
  1. [Contributing](#contributing)
  1. [License](#license)

## About

This is a simple application built using Node.js, Express, Karma, Jasmine, Gulp, AngularJS and Less.js with a focus on best practices in both web development and web design. This is an open source project that closely follows the [Angular Style Guide](https://github.com/johnpapa/angular-styleguide) recommended by AngularJS.

## Example

- [Web Brownie](http://web-brownie.pancakeapps.com/) - Live demo
- [Codepen](http://codepen.io/MelissaMMDP/pen/doGbNy) - Web Brownie on Codepen
- [Plunker](http://embed.plnkr.co/Sog5Sp/preview) - Web Brownie Color.less in Action

**[Back to top](#table-of-contents)**

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install the gulp package globally

    ```bash
    npm install -g gulp
    ```

**[Back to top](#table-of-contents)**    
    
## Installation

- Clone the repo: `git clone https://github.com/MelissaMMDP/web-brownie.git`.
- Install npm from within the project folder:
    ```bash
    npm install
    ```
 
**[Back to top](#table-of-contents)**    
    
## Contents

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
│               ├── color.module.js
│               └── color.routes.js
│           ├── core/
│               ├── 404.html
│               ├── core.module.js
│               └── core.routes.js
│           ├── home/
│               ├── home.controller.js
│               ├── home.controller.spec.js
│               ├── home.html
│               ├── home.module.js
│               └── home.routes.js
│           ├── layout/
│               ├── footer.directive.js
│               ├── footer.directive.spec.js
│               ├── footer.html
│               ├── header.directive.js
│               ├── header.directive.spec.js
│               ├── header.html
│               └── layout.module.js
│           └── app.module.js
│       ├── styles/
│           ├── less/
│               ├── color.less
│               ├── font.less
│               ├── grid.less
│               ├── import.less
│               ├── layout.less
│               └── variables.less
│           └── styles.less
│       └── index.html
│   ├── server/
│       └── app.js
├── .editorconfig
├── .gitignore
├── .jscsrc
├── .jshintrc
├── gulp.config.js
├── gulpfile.js
├── karma.conf.js
├── LICENSE
├── package.json
└── README.md
```

**[Back to top](#table-of-contents)**

## Tasks

- `gulp vet`

    Analyze all project root and src JavaScript with JSHint and JSCS

- `gulp clean`

    Removes the build and .tmp folders
    
- `gulp serve-dev`

    Serves the development code and launches it in a browser using a Node.js and Express web server. While you develop, files are watched and on save will automatically update in the browser using browser-sync.
        
- `gulp serve-build`
    
    The development code is optimized and placed in the build folder then launched in a browser using a Node.js and Express web server. On save of code changes the files will be optimized and browser-sync will reload the browser. 
        
- `karma start`
    
    Watch for file changes and re-run tests on each change

**[Back to top](#table-of-contents)**

## Contributing

Open an issue first to discuss potential changes/additions. If you have questions, feel free to leave them as issues in the repository. If you find a typo, create a Pull Request (PR).

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Discuss the changes in a GitHub issue.
    2. Open a Pull Request (PR), reference the issue, and explain the change and why it adds value.
    3. The PR will be evaluated and either merged or declined.

**[Back to top](#table-of-contents)**

## License

Attributions are appreciated.

### Copyright

Copyright (c) 2015 Melissa Canada

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**[Back to top](#table-of-contents)**
