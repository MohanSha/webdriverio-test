# webdriverio-test

Prerequisite: Docker needs to be installed

### Steps to execute
<ol>
<li> Clone this repo to your local
<li> Change directory to cloned repo
Example: `cd mohansha/webdriverio-test/`
<li> Run `npm install`
<li> Start chrome in docker container
```
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210106
```
<li> Execute test
```
npx wdio run wdio.conf.js
```
</ol>