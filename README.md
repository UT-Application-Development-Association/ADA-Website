# ADA Website 2020
## Quickstart
- clone this repo
- `cd ADA-Website`
- `git checkout dev`
- make sure you have `npm` installed. If no, check out https://github.com/UT-Applicataion-Development-Association/Contribution-Guidelines#install-nodejs--npm
- `npm install`
- now run `npm start`, you should be able to see the development website in around 10 seconds.
- open this folder with visual studio code
- if you use WSL, make sure to use Remote - WSL plugin
- install the following plugins: 
  - ESlint(code linter)
  - Live Sass Compiler(compile Sass to CSS)
  - Prettier(code formatter)
  (when you make a commit, make sure to format using prettier before commit)

## How to use Sass
create your own Sass module with underscore "_" at beginning of filename, for example "_HelloWorld.scss".  
add `@import <your filename>` to Style.scss  
click on `Watch Sass`(bottom right) compile your Sass code.  