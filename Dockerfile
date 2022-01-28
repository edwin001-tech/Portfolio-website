FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
# Bind app to port 8080
EXPOSE 3000
# Command to run app
CMD [ "node", "nodemon index.js" ]



