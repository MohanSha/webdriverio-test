# webdriverio-test

Prerequisite: Docker needs to be installed

### Steps to execute

1. Clone this repo to your local
`git clone https://github.com/MohanSha/webdriverio-test.git`
2. Change directory to cloned repo \
Example: `cd mohansha/webdriverio-test/`
3. Run `npm install`
4. Start chrome in docker container
```
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210106
```
5. Execute test
```
npx wdio run wdio.conf.js
```
