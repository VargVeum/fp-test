---
runme:
  id: 01HKMKC9KWAE04RS2R4Z3E1PPF
  version: v2.0
---

Clone test project from GitHub repo

```sh {"id":"01HKMKCN1XJ6NX7EVQSAJN9BZ9"}
git clone https://github.com/VargVeum/fp-test.git
```

Open downloaded folder in terminal

```sh {"id":"01HKMKDXWYBMT25PZ2HFGTM4MT"}
cd fp-test
```

Install Cypress.IO to downloaded folder with tests

```sh {"id":"01HKMKGD4A12B1G6R5MTPA8XD0"}
npm install cypress --save-dev
```

Download required Cypress add-ons

```sh {"id":"01HKMKGWCCDM7FV9324KHYHVQ9"}
npm run add-plugins
```

Run Cypress Runner

```sh {"id":"01HKMKHZSV5DBEHJMNFW0MWV1A"}
npx cypress open
```

Run tests on headless-mode (with closed UI runner)

```sh {"id":"01HKMKJYCWH9H18H45P657132P"}
npx cypress run --config-file cypress.config.js --browser chrome --headless --spec 'cypress/e2e/tests/**.js'
```

IMPORTANT (!) From security reasons, config file with credentials isn't added to public repo. 
You can receive it (cypress.config main.js) from QA from the project. 
After receiving copy all data from it and paste to cypress.config.js

Base config file for public demo doesn't contain credentials and some tests can be failed. 