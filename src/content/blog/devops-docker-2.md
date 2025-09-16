---
title: "Docker 安装 mysql"
date: 2021-01-09T21:10:00+08:00
updated: 2021-01-09T21:10:00+08:00
keywords: ["独立开发", "Docker"]
featured: true
summary: "Docker 安装mysql"
---


## Dockerfile

```shell
# 使用官方 MySQL 镜像作为基础镜像
FROM mysql:8.4


# 暴露 MySQL 默认端口
EXPOSE 3306

ENV TZ=Asia/Shanghai

# 设置 MySQL 根用户密码环境变量
ENV MYSQL_ROOT_PASSWORD=Wzp123!@#
```

## docker-compose.yml

```shell
version: '3'

services:
  mydb:
    image: mymysql
    container_name: mymysql
    restart: always
    volumes:
      - ./my.cnf:/etc/mysql/my.cnf
      - ./conf.d:/etc/mysql/conf.d
      - ./data:/var/lib/mysql
      - ./logs:/var/log
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: Wzp123!@#
    ports:
      - "3306:3306"


```

## my.conf

```conf
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[client]
default-character-set=utf8

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
bind-address = 0.0.0.0
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```

## mysql 启动挂载本地文件夹报错报错


1. **挂载的宿主目录权限不对**
    
    - 容器内 MySQL 用户 UID/GID 默认是 **999:999**。
        
    - macOS 文件系统的权限和 UID/GID 不匹配，即使你用 chown 改了宿主目录，容器里的 chown 仍然会报错。
        
    
2. **socket 文件还没生成**
    
    - mysql.sock 文件只有 MySQL 启动并初始化完成后才会生成。
        
    - 如果挂载目录不可写，初始化失败，mysql.sock 就不存在，chown 自然报错。
        
    
3. **Docker Desktop 的文件系统限制**
    
    - Mac 上挂载本地目录给 Linux 容器时，某些权限操作（如 chown）会被忽略或失败。

### **方案 A：使用 Docker 卷（最稳定）**

```shell
docker volume create mysql-data

docker run -d \
  --name mysql8 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v mysql-data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:8
```


- 不挂载本地目录，不受权限限制。
    
- Mac 上启动几乎不会出错。

### **方案 B：挂载本地目录 + 权限修复**

1. 创建空目录：
```shell
mkdir -p ~/mysql-data
rm -rf ~/mysql-data/*
```

2. 设置 UID/GID 和权限：
```shell
sudo chown -R 999:999 ~/mysql-data
sudo chmod -R 700 ~/mysql-data
```

3. 启动容器：
```shell
docker run -d \
  --name mysql8 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v ~/mysql-data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:8
```
