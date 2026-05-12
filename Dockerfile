FROM nginx:alpine

# Копируем готовые статические файлы в стандартную папку nginx
COPY . /usr/share/nginx/html

# Удаляем сам Dockerfile и docker-compose из публичной папки
RUN rm -f /usr/share/nginx/html/Dockerfile \
    && rm -f /usr/share/nginx/html/docker-compose.yml \
    && rm -f /usr/share/nginx/html/nginx.conf \
    && rm -rf /usr/share/nginx/html/docker

# Копируем кастомный конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
