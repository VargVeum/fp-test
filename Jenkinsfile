pipeline {
    agent any
    stages {        
        stage('Clone autotests repo') {
            steps {
                git branch: 'main', url: 'https://github.com/VargVeum/fp-test.git'
            }
        }
        stage('Install required Cypress plugin') {
            steps {
                sh ''' 
                npm run add-plugins
                '''                
            }
        }
        stage('Install Cypress') {
            steps {
                sh '''
                npm install cypress --save-dev'''              
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh '''
                NO_COLOR=1 npx cypress run --config-file cypress.config.js --browser chrome --headless --spec 'cypress/e2e/tests/**.js'    
                '''
            }
        }
    }
}