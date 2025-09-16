---
title: "Docker 安装 nginx"
date: 2021-01-10T21:10:00+08:00
updated: 2021-01-10T21:10:00+08:00
keywords: ["独立开发", "Docker","nginx"]
featured: true
summary: "Docker 安装nginx"
---

## 将容器的nginx.conf复制到主机下
```shell
docker run --rm --entrypoint=cat nginx /etc/nginx/nginx.conf > /host/path/nginx.conf

```


## Dockerfile:
```shell
FROM nginx:1.27-alpine

WORKDIR /root/app/
COPY ./html /usr/share/nginx/html
COPY ./conf.d/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

```


## docker-compose.yml:
```yaml
version: '3'

services:
  mynginx:
    image: nginx:1.27-alpine-otel
    container_name: mynginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./conf.d:/etc/nginx/conf.d
      - ./html:/usr/share/nginx/html
      - ./data:/usr/share/nginx/data
      - ./logs:/var/log/nginx
    environment:
      - TZ=Asia/Shanghai
    extra_hosts:
      - 'host.docker.internal:host-gateway'

```

## nginx.conf

```conf

user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

## 具体的conf配置参考
```conf
server {
    listen       80;
    server_name  boss.aiwendao.cn;

    location / {
        #root   /usr/share/nginx/html;
        #index  index.html index.htm;
        proxy_pass http://host.docker.internal:3000;
    }

    location ~ /(wechat|api|checkLogin) {
       proxy_pass http://host.docker.internal:8081;
    }

    location /MP_verify_tWNNuHTZiGzJzBuW.txt {
        return 200 'tWNNuHTZiGzJzBuW';
    }

    #charset utf-8;

    #access_log  logs/host.access.log  main;


    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html

    error_page   500 502 503 504  /50x.html;

    location = /50x.html {
        root   html;
    }

}

server {

    listen 443 ssl;

    server_name boss.aiwendao.cn;

    ssl_certificate "/usr/share/nginx/data/boss.aiwendao.cn.full_chain_ecc.crt";
    #填写证书私钥文件绝对路径
    ssl_certificate_key "/usr/share/nginx/data/boss.aiwendao.cn.key.pem";
    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';


    location / {
        #root   /usr/share/nginx/html;
        #index  index.html index.htm;
        proxy_pass http://host.docker.internal:3000;
    }

    location ~ /(wechat|api|checkLogin) {
       proxy_pass http://host.docker.internal:8081;
    }

}

```

