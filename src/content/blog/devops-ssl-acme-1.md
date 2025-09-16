---
title: "免费SSL证书配置"
date: 2021-01-14T21:10:00+08:00
updated: 2021-01-14T21:10:00+08:00
keywords: ["独立开发","SSL证书"]
featured: true
summary: "免费SSL证书配置"
---


官方文档 `https://github.com/acmesh-official/acme.sh/wiki/`

## acme证书安装

```shell
// 安装 ACME 脚本
curl https://get.acme.sh | sh

// 设置acme.sh别名，方便后续使用
alias acme.sh=~/.acme.sh/acme.sh

// 设置 ACME 脚本自动更新
acme.sh --upgrade --auto-upgrade

// 由于 ZeroSSL 作为默认 CA，必须先注册帐户才能颁发新证书，故而更换为 Letsencrypt。
acme.sh --set-default-ca --server letsencrypt

// 更新所有域名
acme.sh --renew-all   --force

//  更新具体的域名
acme.sh --renew -d xxx.com  --force
```


## 域名配置证书

参考网址 `https://www.cnblogs.com/waw/p/18036926`

- 步骤一：在boss.aiwendao.cn的nginx配置文件中，指向静态目录

```conf
location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        #proxy_pass http://host.docker.internal:3000;
}
```


- 步骤二： 生成证书文件
```shell
acme.sh --issue -d life.aiwendao.cn  --webroot /root/app/nginx/html/
```

- 步骤三：拷贝证书

```shell
acme.sh --install-cert -d boss.aiwendao.cn --cert-file /root/app/nginx/data/boss.aiwendao.cn.cert.pem --key-file /root/app/nginx/data/boss.aiwendao.cn.key.pem --fullchain-file /root/app/nginx/data/boss.aiwendao.cn.fullchain.pem
```

## 证书自动续期配置
```text
https://jike.dev/posts/set-acme-certificate-with-auto-renew/
```
