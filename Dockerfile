# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S react -u 1001

# Install app dependencies
# Copy package files first for better caching
COPY package.json yarn.lock ./

RUN apk add --no-cache git

# Install dependencies using yarn
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Change ownership to non-root user
RUN chown -R react:nodejs /app
USER react

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["yarn", "start"]