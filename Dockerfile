FROM nginx:alpine

# Копируем статические файлы в стандартную папку nginx
COPY . /usr/share/nginx/html

# Удаляем служебные файлы из публичной папки
RUN rm -f /usr/share/nginx/html/Dockerfile \
    && rm -f /usr/share/nginx/html/docker-compose.yml \
    && rm -f /usr/share/nginx/html/README.md \
    && rm -rf /usr/share/nginx/html/docker

# Заменяем дефолтный конфиг сайта (не главный nginx.conf!)
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]