FROM node:18

ENV PORT=3000
EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

CMD [ "node", "index.js" ]