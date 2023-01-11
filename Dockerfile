FROM node:16

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install --omit dev

COPY dist/index.js dist/utils.js ./

EXPOSE 8080

CMD [ "node", "index.js" ]