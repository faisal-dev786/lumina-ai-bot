# Use Node.js 14 LTS as the base image
FROM node:20-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy the project files to the working directory
COPY . .

# Build the React app
RUN yarn build

# Stage 2: Serve the React app with a lightweight HTTP server
FROM nginx:alpine

# Copy the built app from the build stage to the nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
