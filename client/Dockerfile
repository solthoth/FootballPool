# BUILD
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# FINAL
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/<app> /usr/share/nginx/html