# Ansible Lab - 2 Server

## Mô tả
Ansible project quản lý 2 server:
- **Máy 1** (10.0.2.100): Nginx + GitLab
- **Máy 2** (10.0.2.101): MySQL

## Yêu cầu
- Ansible >= 2.9
- SSH key đã copy lên 2 máy

## Cách dùng

### Setup SSH key
ssh-copy-id -i ~/.ssh/ansible_key.pub daoson@10.0.2.100
ssh-copy-id -i ~/.ssh/ansible_key.pub daoson@10.0.2.101

### Kiểm tra kết nối
ansible all -m ping

### Chạy toàn bộ
ansible-playbook site.yml

### Chỉ cài Nginx
ansible-playbook install_nginx.yml

### Chạy thử (không thực thi)
ansible-playbook site.yml --check
##### hello moi nguoi 
# test polling
