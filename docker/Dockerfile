FROM nginx:1.13
COPY dist/ /usr/share/nginx/html/
COPY etc/nginx/nginx.conf /etc/nginx/
COPY etc/nginx/conf.d /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]