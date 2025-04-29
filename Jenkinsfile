pipeline {
    agent any

    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kshitij-y/docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    echo "🔍 Checking current directory:"
                    pwd
                    echo "📁 Listing files:"
                    ls -la

                    echo "🐳 Building Docker Image..."
                    docker build -t nalanda .
                '''
            }
        }

        stage('Prune Previous Containers & Images') {
            steps {
                sh '''
                    echo "🧹 Pruning previous Docker containers and images..."

                    # Stop any running container from nalanda image
                    docker ps -q -f "ancestor=nalanda" | xargs -r docker stop
                    
                    # Remove any stopped containers from nalanda image
                    docker ps -a -q -f "ancestor=nalanda" | xargs -r docker rm
                    
                    # Remove the old image if exists
                    docker images -q nalanda | xargs -r docker rmi
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    echo "🚀 Running Docker Container on port 3000..."
                    docker run -d -p 3000:3000 nalanda
                '''
            }
        }
    }

    post {
        always {
            echo "✅ Pipeline completed"
        }
    }
}
