pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Ansible') {
            steps {
                sh 'ansible --version'
                echo "Dang chay tren nhanh: ${env.GIT_BRANCH}"
            }
        }

        stage('Run Playbook - Staging') {
            when {
                expression { env.GIT_BRANCH == 'origin/develop' }
            }
            steps {
                sh '''
                    ansible-playbook -i inventory/ site.yml \
                    --private-key /var/lib/jenkins/.ssh/ansible_key
                '''
                echo 'Deploy Staging thanh cong!'
            }
        }

        stage('Run Playbook - Production') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                sh '''
                    ansible-playbook -i inventory/ site.yml \
                    --private-key /var/lib/jenkins/.ssh/ansible_key
                '''
                echo 'Deploy Production thanh cong!'
            }
        }
    }

    post {
        success { echo "BUILD THANH CONG tren nhanh ${env.GIT_BRANCH}!" }
        failure { echo "LOI tren nhanh ${env.GIT_BRANCH}, xem log ben tren!" }
    }
}
