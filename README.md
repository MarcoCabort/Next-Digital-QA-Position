# Next-Digital-QA-Position
Technical test for the position of QA Engineer in Next Digital

# Test Execution Tutorial

## Online Execution 

To run the tests you must go to the repository on github.

Then go to the Actions section 

Then go to the "E2E Tests Pipeline" section 

And click on Run Workflow

Then the execution is going to start. It is posible to see the hole flow by clicking over "E2E Tests Pipeline"

When you have finished you should go to the Summary section

Here you will see the artifacts section where you can download an html report with the results of the tests. In case one fails, you will see the failed step along with a screenshot of the moment of failure.

## Local Execution

To install the dependencies execute the command: npm install

To install the browser execute the command: npx playwright install --with-deps chromium

To run the tests execute the command: npm test

After the execution you will see the html report in the main path of the repository

(If you need to see the browser during the test execution you can change the headless attribute from true to false in the hooks.ts file)
