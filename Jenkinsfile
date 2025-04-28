pipeline {
    agent any


    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ashutoshpradhan3/docker.git'
            }
        }


        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nalanda .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 nalanda'
            }
        }
    }

    post {
        always {
            echo "Pipeline completed"
        }
    }
}