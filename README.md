# webdriverio-test

Prerequisite: Docker needs to be installed

### Steps to execute
1. Start chrome in docker container
```
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210106
```
2. Execute test
```
npx wdio run wdio.conf.js
```