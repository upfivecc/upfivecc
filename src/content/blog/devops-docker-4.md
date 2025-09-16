---
title: "Docker 安装 minio"
date: 2021-01-11T21:10:00+08:00
updated: 2021-01-11T21:10:00+08:00
keywords: ["独立开发", "Docker","minio"]
featured: true
summary: "Docker 安装minio"
---



## Dockerfile

```dockerfile
# 使用官方 MinIO 镜像作为基础镜像
FROM minio/minio

WORKDIR /root/app/

# 设置环境变量
ENV MINIO_ROOT_USER=minioadmin
ENV MINIO_ROOT_PASSWORD=minioadmin

# 暴露 MinIO 服务的端口
EXPOSE 9000
EXPOSE 9001

# 定义启动命令
CMD ["minio", "server", "./data"]

```

## docker-compose.yml
```yaml
version: '3'

services:
  myminio:
    image: myminio
    container_name: myminio
    restart: always
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - /root/app/minio/data:/root/app/data
    environment:
      - TZ=Asia/Shanghai
      - MINIO_ROOT_USER=minioadmin
      - MINIO_ROOT_PASSWORD=minioadmin
    command: server /root/app/data  --console-address ":9001"
```

