FROM node:20-alpine AS build
WORKDIR /app
COPY MyWebsite/package*.json ./
RUN npm install
COPY MyWebsite/ ./
RUN npm run build

FROM nginx:stable-alpine

#Clear
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

#Create folders
RUN mkdir -p /usr/share/nginx/html/src/assets/icons \
             /usr/share/nginx/html/src/assets/cursor \
             /usr/share/nginx/html/src/assets/img\
            /usr/share/nginx/html/src/assets/scripts

#Copy server files
COPY --from=build /app/src/assets/icons/ /usr/share/nginx/html/src/assets/icons/
COPY --from=build /app/src/assets/cursor/ /usr/share/nginx/html/src/assets/cursor/
COPY --from=build /app/src/assets/img/ /usr/share/nginx/html/src/assets/img/
COPY --from=build /app/src/assets/img/ /usr/share/nginx/html/src/assets/scripts/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]