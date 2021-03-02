# Description

Service view and evaluate films

## Start application

```
npm run production
```

## Details

###### User can

-   Log in
-   Evaluate film
-   Add comment for film
-   Add in bookmarks
-   Add in favorites ( like )

###### Manager can

-   Add new film for evaluate

###### Admin can

-   Add manager

## Site pages

-   Main page
-   Film page
-   User page

## Functionality

-   Search

## Data

###### User

-   Login \*
-   Password \*
-   FIO
-   Gander
-   Date birthday
-   Phone number
-   Email
-   Addres

###### Filmpage

-   Production year
-   Country
-   Genre
-   Tagline
-   Producer
-   Scenario
-   Producer
-   Composer
-   Artist
-   Mounting
-   Budget
-   Fees in USA
-   Fees in world
-   Fees in Russian
-   Premiere in Russian
-   Premiere in World
-   Digital release
-   Age
-   MPAA rating
-   Time
-   Starring
-   Roles duplicatied

## Api

x - Authorized

| Method | Url                | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | /api/listFilms     | Get list films with limit |
| GET    | api/getFilmPage    | See film page             |
| GET    | api/search         | Search on name film       |
| PUT    | api/estimateFilm   | Estimate film (x)         |
| POST   | api/addNewBookmark | Add in bookmark (x)       |
| POST   | api/addNewFavorite | Add in favorites (x)      |
| UPDATE | api/updateUserData | Update data about me (x)  |
| POST   | api/writeComment   | Write comment (x)         |
