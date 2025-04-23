pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ashutoshpradhan3/nalanda-ceramics:latest'
        DOCKER_CREDENTIALS_ID = 'docker-hub-creds'
    }

    stages {
        stage('Clone GitHub Repo') {
            steps {
                git url: 'https://github.com/ashutoshpradhan3/docker', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}")
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}").push()
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed."
        }
    }
}
