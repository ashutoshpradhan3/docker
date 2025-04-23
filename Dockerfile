# Step 1: Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
