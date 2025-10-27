# Use official Node image
FROM node:20-alpine
WORKDIR /app


# copy package files
COPY package.json package-lock.json* ./


# install deps
RUN npm ci --silent


# copy source
COPY . .


# generate prisma client
RUN npx prisma generate


# build
RUN npm run build


EXPOSE 3000
CMD ["node", "dist/main.js"]