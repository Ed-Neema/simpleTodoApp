FROM node:18 as builder
WORKDIR /app/simpleTodoApp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/simpleTodoApp/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]