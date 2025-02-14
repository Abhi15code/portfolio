# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the app
# FROM nginx:alpine

# Copy the build output to replace the default nginx contents
# COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 1011

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm" , "start"]