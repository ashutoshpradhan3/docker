pipeline {
    agent any

    environment {
        IMAGE_NAME = "ashutoshpradhan3/nalanda-ceramics"
        VERSION = "v1.0" // Or use "${env.BUILD_NUMBER}" for auto-increment
    }

    options {
        skipDefaultCheckout() // Prevents Jenkins from auto-checking out before workspace is cleaned
    }

    stages {
        stage('Initialize & Clean Workspace') {
            steps {
                cleanWs() // Clean workspace first
                checkout scm // Then checkout code
            }
        }

        stage('Test Shell') {
            steps {
                echo "Testing shell environment..."
                script {
                    // Explicitly run shell commands
                    sh '''
                        echo "✅ Hello from Jenkins Shell Stage"
                        whoami
                        echo $HOME
                        echo $PATH
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    withEnv(["PATH+EXTRA=/usr/local/bin"]) {
                        sh "docker build -t ${IMAGE_NAME}:${VERSION} ."
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh "docker push ${IMAGE_NAME}:${VERSION}"
                }
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD Pipeline completed successfully. Image pushed: ${IMAGE_NAME}:${VERSION}"
        }
        failure {
            echo "❌ CI/CD Pipeline failed."
        }
    }
}
