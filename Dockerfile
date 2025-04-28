# Step 1: Build the React app
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Step 2: Serve with Node.js using 'serve'
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

WORKDIR /app

# Copy build files from the builder stage
COPY --from=builder /app/build ./build

# Expose the port that serve will run on
EXPOSE 3000

# Run the React app with serve
CMD ["serve", "-s", "build", "-l", "3000"]
