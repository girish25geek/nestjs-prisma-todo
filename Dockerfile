# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --silent && npm cache clean --force

# Copy source
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the app
RUN npm run build

# Create and use a non-root user
# The 'node' user already exists in node:alpine image
USER node

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "dist/main.js"]
