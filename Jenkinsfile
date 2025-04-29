pipeline {
    agent any

    environment {
        IMAGE_NAME = "ashutoshpradhan3/nalanda"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ashutoshpradhan3/docker.git'
            }
        }

        stage('Clean Previous') {
            steps {
                sh '''
                    docker ps -q --filter "name=nalanda-container" | xargs -r docker stop
                    docker ps -a -q --filter "name=nalanda-container" | xargs -r docker rm
                    docker rmi -f $IMAGE_NAME || true
                '''
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Hub Login & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name nalanda-container $IMAGE_NAME'
            }
        }
    }

    post {
        always {
            echo '✅ Done!'
        }
    }
}
