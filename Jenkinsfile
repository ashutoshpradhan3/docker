pipeline {
    agent any

    environment {
        IMAGE_NAME = "ashutoshpradhan3/nalanda-ceramics"
        VERSION = "v1.0"
    }

    options {
        skipDefaultCheckout()
    }

    stages {
        stage('Initialize & Clean Workspace') {
            steps {
                echo '🔥 Cleaning workspace safely (excluding Jenkins internals)...'
                script {
                    sh '''
                        echo "📂 Before cleanup:"
                        ls -a

                        # Clean only safe paths (no hidden/internal Jenkins folders)
                        find . -mindepth 1 -not -path "./@tmp*" -not -path "./@script*" -not -path "./@durable*" -not -path "./.git*" -exec rm -rf {} +

                        echo "✅ After cleanup:"
                        ls -a
                    '''
                }
                checkout scm
            }
        }

        stage('Test Shell') {
            steps {
                echo "🧪 Testing shell environment..."
                script {
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
