FROM node:19

WORKDIR /usr/src/app

COPY . .

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
ENTRYPOINT npm start
# CMD [ "npm", "start" ]