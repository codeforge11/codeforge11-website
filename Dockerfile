FROM node:latest AS build
WORKDIR /app
COPY MyWebsite/package*.json ./
RUN npm install
COPY MyWebsite/ ./
RUN npm run build

FROM nginx:latest

#Clear
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

RUN mkdir -p /usr/share/nginx/html/src
COPY --from=build /app/src/assets /usr/share/nginx/html/src/assets/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]