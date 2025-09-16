---
title: "docker 使用"
date: 2021-01-08T21:10:00+08:00
updated: 2021-01-08T21:10:00+08:00
keywords: ["独立开发", "docker"]
featured: true
summary: "Docker 安装及日常使用"
---

## centos安装docker+docker-compose

### 1. 指定docker镜像源
``` shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

```

https://www.runoob.com/docker/docker-tutorial.html

### 2. 阿里软件包
`https://mirrors.aliyun.com/centos/7.9.2009/extras/x86_64/Packages/`

### 3. docker安装步骤
`https://docs.docker.com/engine/install/centos/`

### 4. 使用官方安装脚本自动安装
`curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun`

### 手动安装：
卸载旧版本
```shell
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```



#### 1、更新系统
`sudo yum update`

#### 2、添加docker存储库
```shell
sudo yum install -y yum-utils

sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 3、安装docker ce（社区版）
 `sudo yum install docker-ce`

#### 4、docker相关命令
```text
 启动docker
sudo systemctl start docker

 停止docker
sudo systemctl stop docker

重启docker
sudo systemctl restart docker

设置开机启动
sudo systemctl enable docker


配置docker镜像加速器
`/etc/docker/daemon.json`

{
  "registry-mirrors":[
    "https://qw4855zt.mirror.aliyuncs.com",
    "https://hub-mirror.c.163.com",
    "https://docker.m.daocloud.io",
    "https://cr.console.aliyun.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://reg-mirror.qiniu.com"
  ]
}

阿里云专属镜像加速器地址:

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

```

### 5. 验证docker是否安装成功
`sudo docker pull hello-world`

`docker run hello-world`

### 6. 卸载docker
`yum remove docker-ce`

### 7. 删除镜像、容器、配置文件等内容
`rm -rf /var/lib/docker`

> 参考文档 https://www.runoob.com/docker/centos-docker-install.html


### 8. 安装docker-compose

#### 1、手动下载，可修改版本号
`curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose`


#### 2、添加执行权限
`chmod +x /usr/local/bin/docker-compose`

#### 3、检查docker compose版本
`docker-compose version`

### 9. 阿里云私有镜像库
````
sudo docker login --username=sky****@sina.com registry.cn-hangzhou.aliyuncs.com
````

`registry.cn-hangzhou.aliyuncs.com/metayoo/metayoo`


### 10. docker查看容器日志
`
```shell
docker logs -f 容器ID
```

### 11. docker 清理没有标签的镜像
```shell
docker images | grep none | awk '{print $3}' | xargs docker rmi
```

