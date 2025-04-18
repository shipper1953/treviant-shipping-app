# Use official Node.js LTS image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
COPY package-lock.json* ./
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Set environment variables
ENV NODE_ENV production
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
