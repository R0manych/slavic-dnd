# Триречье — сайт-свод

Статический сайт-справочник по сеттингу Триречье (адаптация D&D 5e под славянский мир).

## Запуск через Docker Compose

```bash
docker compose up -d --build
```

Сайт будет доступен по адресу: **http://localhost:8080**

## Остановка

```bash
docker compose down
```

## Изменение порта

В `docker-compose.yml` поменяй строку `"8080:80"` — слева указан внешний порт.
Например, для порта 3000: `"3000:80"`.

## Режим разработки (правки без пересборки)

Если хочешь править HTML/CSS без пересборки контейнера, раскомментируй в `docker-compose.yml` строки volumes:

```yaml
volumes:
  - ./:/usr/share/nginx/html:ro
  - ./docker/nginx.conf:/etc/nginx/conf.d/default.conf:ro
```

После этого правки в файлах сайта подхватываются мгновенно.

## Структура сайта

```
/
├── index.html              — главная
├── style.css               — общий стиль
├── world/
│   ├── trirechye.html      — описание мира
│   └── map.html            — карта
├── character/
│   ├── narody.html         — народы (9)
│   ├── predystorii.html    — предыстории (12)
│   ├── classes.html        — сводка классов
│   ├── ratnik.html         — Ратник
│   ├── berserk.html        — Берсерк
│   └── plut.html           — Плут
├── rules/
│   ├── kharizma.html       — правила Харизмы
│   ├── intellekt.html      — правила Интеллекта
│   └── mery.html           — меры длины
├── equipment/
│   ├── oruzhie.html        — оружие
│   └── dospekhi.html       — доспехи
├── docker/
│   └── nginx.conf          — конфиг nginx
├── Dockerfile
└── docker-compose.yml
```

## Технологии

- Чистый HTML + CSS, без JavaScript
- Шрифты подгружаются с Google Fonts (Forum для заголовков, Lora для текста)
- Адаптивная вёрстка для мобильных
- nginx с gzip-сжатием и кэшированием

## Что ещё в разработке

В сайте пока готовы: 3 класса (Ратник, Берсерк, Плут). Остальные классы — Богатырь, Охотник, Волхв, Ведун, Чародей — появятся в следующих итерациях. Будут также пантеон богов, общие правила магии и бестиарий.
