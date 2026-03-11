FROM node:20 AS build


WORKDIR /usr/src/app

COPY . .
RUN npm ci
ENV DEBUG=playground:*

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run test
RUN npm run build

FROM nginx:1.29
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]