FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./src /usr/src/app

# building the app
RUN npm i
RUN npm run build

EXPOSE 80
EXPOSE 8080

# Running the app
CMD [ "npm", "run", "start" ]

