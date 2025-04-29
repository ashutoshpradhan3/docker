pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kshitij-y/docker.git'
            }
        }

        stage('Clean Previous Image & Container') {
            steps {
                sh '''
                    echo "🛑 Stopping old container (if any)..."
                    docker ps -q --filter "ancestor=nalanda" | xargs -r docker stop
                    docker ps -a -q --filter "ancestor=nalanda" | xargs -r docker rm

                    echo "🧽 Removing old image (if any)..."
                    docker rmi -f nalanda || true
                '''
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t nalanda .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name nalanda-container nalanda'
            }
        }
    }

    post {
        always {
            echo '✅ Done!'
        }
    }
}
