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
