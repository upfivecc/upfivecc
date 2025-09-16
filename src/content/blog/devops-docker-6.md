---
title: "Docker 安装 PostgreSQL"
date: 2021-01-13T21:10:00+08:00
updated: 2021-01-13T21:10:00+08:00
keywords: ["独立开发", "Docker","PostgreSQL"]
featured: true
summary: "Docker 安装PostgreSQL"
---


## Dockerfile
```dockerfile
# 使用官方 PostgreSQL 镜像作为基础镜像
FROM postgres:17


# 暴露 MySQL 默认端口
EXPOSE 5432

ENV TZ=Asia/Shanghai

# 设置 MySQL 根用户密码环境变量
ENV MYSQL_ROOT_PASSWORD=Wzp123!@#


```

## docker-compose.yml

```yaml
version: '3'

services:
  mypostgresql:
    image: mypostgresql
    container_name: mypostgresql
    restart: always
    volumes:
      - ./my.cnf:/etc/mysql/my.cnf
      - ./config/postgresql.conf:/var/lib/postgresql/config/postgresql.conf
      - ./config/pg_hba.conf:/var/lib/postgresql/config/pg_hba.conf
      - ./data:/var/lib/postgresql/data
      - ./logs:/var/log/postgresql
    environment:
      TZ: Asia/Shanghai
      POSTGRES_PASSWORD: Wzp123!@#
    ports:
      - "5432:5432"

```
