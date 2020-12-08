FROM nginx:1.13
COPY dist/ /usr/share/nginx/html/
COPY docker/etc/nginx/nginx.conf /etc/nginx/
COPY docker/etc/nginx/conf.d /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]