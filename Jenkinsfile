pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/daodangson21503/devops-ansible'
            }
        }
        stage('Check Ansible') {
            steps {
                sh 'ansible --version'
            }
        }
        stage('Run Playbook') {
            steps {
                sh '''
                    ansible-playbook -i inventory/ site.yml \
                    --private-key /var/lib/jenkins/.ssh/ansible_key
                '''
            }
        }
    }

    post {
        success { echo 'Deploy thành công!' }
        failure { echo 'Lỗi, xem log bên trên' }
    }
}
