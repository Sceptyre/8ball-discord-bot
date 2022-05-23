# Use node16 as base image
FROM node:16

# Define app directory
WORKDIR /usr/src/app

# Define data directory
VOLUME /usr/src/data

# Copy package file
COPY package.json .

# Install based on package
RUN npm install

# Copy remaining files
COPY . .

# Launch service
CMD ["node","."]