pipeline {
    agent any

    environment {
        IMAGE_NAME = "ashutoshpradhan3/nalanda-ceramics"
        VERSION = "v1.0" // Could also use VERSION = "${env.BUILD_NUMBER}"
    }

    stage('Clean Workspace') {
        steps {
            cleanWs()  // Clean the workspace before the build starts
        }
    }


    stages {
        stage('Test Shell') {
            steps {
                echo "Testing shell environment..."
                sh '''
                    echo "✅ Hello from Jenkins Shell Stage"
                    echo "Current User: $(whoami)"
                    echo "Home Dir: $HOME"
                    echo "PATH: $PATH"
                '''
            }
        }


        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Ensure Jenkins uses correct PATH
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
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
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
