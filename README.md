# Ansible Lab - GitLab + MySQL + Nginx

## Mô tả
Ansible playbook tự động cài GitLab CE, MySQL, Nginx trên Rocky Linux 9.

## Cấu trúc
- roles/gitlab  — Cài GitLab CE
- roles/mysql   — Cài MySQL Server  
- roles/nginx   — Cài và config Nginx

## Cách chạy
ansible-playbook -i inventory/hosts.ini site.yml
