# Testing notes
_This is just simple realisation of tests with BDD and Cypress.io_
### Installation
- Checout repo
- Install the dependencies
    ```sh
    $ cd cypress-cucumber
    $ npm install -d
    ```
- Run OOS application
- Run tests
    ```sh
    $ npx cypress run --spec ./cypress/integration/applicants.feature --env URL=http://localhost:5000
    ```