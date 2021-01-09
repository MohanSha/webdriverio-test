FROM node:14.15.3-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY test/specs/ ./test/specs/
RUN apk add python make g++
RUN npm install
COPY . .
CMD /usr/local/bin/npx wdio wdio.conf.js