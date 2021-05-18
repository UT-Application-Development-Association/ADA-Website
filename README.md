# ADA Website 2020
## Deployed Website URL: uoftada.com

## Branches:
- `dev`: Contains active approved development. Developer needs to create pull requests in order to add commits to `dev`.
- `master`: Contains published website code. In the end `master` should be even with `dev`.
- `gh-pages`: Contains a complete build of the website. No development code in this branch. Ideally it should be generated from `master` branch.
- All other branches: Developer created branches. Most of the time they should be checkout from `dev`. 

## Quickstart:
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
- click the **Watch Sass** button from bottom right side of vscode. This will generate css files for you. This is important!! If you don't do this then there would be no style. 

- **When you create a new class name, make sure to start the class name with `opening`, `main`, `left` or `right`! Otherwise, there might be future collision risks.**

## How to use Sass
create your own Sass module with underscore "_" at beginning of the filename, for example, "_HelloWorld.scss".  
add `@import <your filename>` to Style.scss  
click on `Watch Sass`(bottom right) compile your Sass code.  

### Should you have any other questions, make sure to contact Frank or Leon. 

## How to build and deploy the website
1. Assume you are building from `master` branch, first make sure your website can compile and run using `npm start`
2. Run `npm run build`
3. After build is finished, you should see a `build` folder in the directory. 
4. Save/copy the build folder to somewhere else, we will use it later. 
5. `git checkout gh-pages`
6. Delete everything in this branch, except the file `CNAME`. 
7. Copy everything from the build folder we generated into this branch's root folder.
8. Push your changes onto `origin/gh-pages`.
9. Wait for a while(1min to 30mins), github page should configure itself.
10. Go to uoftada.com to see your changes.

Note: the website domain is managed with GoDaddy. For more info please contact the administrators. 
