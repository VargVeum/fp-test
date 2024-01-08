---
runme:
  id: 01HKMJ09FJRJQCP4P4W5ES8CEV
  version: v2.0
---

```sh {"id":"01HKMJAGTNYQXJHNVZ93K7QVJZ"}
> # For opening project

##### 1. Clone test project from GitHub repo
~~~
git clone https://github.com/VargVeum/fp-test.git
~~~
##### 2. Open downloaded folder in terminal
~~~
cd fp-test
~~~
##### 4. Install Cypress.IO to downloaded folder with tests
~~~
npm install cypress --save-dev
~~~
##### 5. Download required Cypress add-ons
~~~
npm run add-plugins
~~~
IMPORTANT: List of required third-party plugins described in package.json in "add-plugins" command.
##### 6. Run Cypress Runner
~~~
npx cypress open
~~~
##### 7. Run any test via clicking on its name in runner 
~~~ 
Passwords and some links are saved in separate files, which can be obtained from the QA automation or devops engineers. 

Here file name's for paste to downloaded projects:
- cypress.config.js
~~~
> # Run tests on headless-mode
~~~
npx cypress run --config-file cypress.config.js --browser chrome --headless --spec 'cypress/e2e/tests/**.js'
~~~
```