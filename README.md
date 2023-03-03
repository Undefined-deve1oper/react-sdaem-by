# Сервис "SdaemBy". Аренда недвижимости в России.

SPA приложение с клиент-серверной архитектурой.

1. Разработал Авторизацию/Регистрацию, JWT.
2. Личный кабинет пользователя(забронированные номера,
   избранное) с возможностью редактирования.
3. Панель администратора (Таблица незабронированных товаров, отмена бронирования, )
4. Страница с доступными номера ( Поиск, Сортировка, Фильтрация,
   Пагинация).
5. Страница номера ( Возможность забронировать номер, оставить отзыв,
   система лайков, рейтинг номера).

# Админ Login/Password: admin@gmail.ru, Test1234

# deploy: http://45.8.249.147/

# Запуск проекта локально(временное решение)

```
cd client -> npm start
cd server -> npm run serve
change apiEndPoint -> client/config.json = {"apiEndPoint": "http://localhost:8080/api"}
```

# Стек технологий

-   React, Typescript
-   React-Redux, Redux Toolkit
-   SASS, SCSS
-   NodeJS, Express, MongoDB
-   Docker

![Screenshot](./screenshots/screen-1.png)

# Реализовано

-   Авторизация и регистрация

![Screenshot](./screenshots/sign-in.png)
![Screenshot](./screenshots/sign-up.png)

-   Страница с доступными товарами ( Поиск, Сортировка, Фильтрация,Пагинация/Постраничный вывдо)

![Screenshot](./screenshots/screen-2.png)
![Screenshot](./screenshots/screen-4.png)

-   Страница товара (Забронировать, добавить в избранное, оставить отзыв могут только авторизованные пользователи)

![Screenshot](./screenshots/estate-page.png)

-   Меню и страница пользователя

![Screenshot](./screenshots/profile.png)

-   Панель администратора

![Screenshot](./screenshots/screen-6.png)

-   Панель администратора(Список бронирований для каждого номера, отмена бронирования, страница пользователя, кто забронировал номер).

![Screenshot](./screenshots/booking.png)
![Screenshot](./screenshots/estates.png)
![Screenshot](./screenshots/ticket.png)

-   Страница редактирования пользователя

![Screenshot](./screenshots/screen-10.png)

-   Возможность оставить отзыв для номера, система лайков, рейтинг.

![Screenshot](./screenshots/comments-and-booking.png)

-   Страница редактирования номера( only user role is Admin )

![Screenshot](./screenshots/admin-edit.png)

-   Страницы: Мои Бронирования, Закладки.

![Screenshot](./screenshots/my-booking.png)
![Screenshot](./screenshots/bookmarks.png)
