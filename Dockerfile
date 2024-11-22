# get node image from docker hub
FROM node:20-alpine

# create a directory /app in container
WORKDIR /app

# copy package.json and package-lock.json to /app in container
COPY package*.json .

# install dependencies
RUN npm install 

# copy all files from current directory to /app in container
COPY . .

# build the app(compile the typescript code to javascript)
RUN npm run build

# expose port
EXPOSE 80

# start the app
CMD [ "npm", "start" ]