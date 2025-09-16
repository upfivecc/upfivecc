---
title: "Docker 安装 redis"
date: 2021-01-12T21:10:00+08:00
updated: 2021-01-12T21:10:00+08:00
keywords: ["独立开发", "Docker","redis"]
featured: true
summary: "Docker 安装redis"
---


## Dockerfile
```dockerfile
# 使用官方 redis 镜像作为基础镜像
FROM redis:latest

WORKDIR /root/app/

# 设置环境变量


# 暴露 redis 服务的端口
EXPOSE 6379

# 定义启动命令
CMD [["redis-server", "--appendonly", "yes"]

```

## docker-compose.yml
```yaml
version: '3'

services:
  myredis:
    image: myredis
    container_name: myredis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - /root/app/redis/data:/root/app/data
    environment:
      - TZ=Asia/Shanghai
    command: ["redis-server", "--appendonly", "yes"]
```

