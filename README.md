This is a very basic project to run WebdriverIO tests with Cucumber and uses BDD to JavaScript.
Requirements: Node and NPM
Steps to set this project in your local machine:  
Clone the repo, 
install Node (node -v), 
install npm (npm -v), initialize package.json (npm init -y), 
install WebdriverIO CLI (npm i --save-dev @wdio/cli) OR if you have any permission error run this instead (sudo npm i --save-dev @wdio/cli)
Create a test folder (mkdir -p ./test/specs)
Create a test script file (touch ./test/specs/myFirstScript.js)
Verify the wdio test runner (./node_modules/.bin/wdio run wdio.conf.js)
Running on mac os (./node_modules/.bin/wdio run wdio.conf.js
