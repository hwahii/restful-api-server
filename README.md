# RESTful API server
## Live Demo
https://hwahii-restful-api-server.herokuapp.com/  (Heroku server, may sleep)

## Run locally

1. 安裝node_modules

   `npm install`
2. 修改config

   `vim config.json`

   在connectionString的值中填入MongoDB的url
3. 以node執行

   `node server.js`

   port預設為4000

## APIs
POST 以及 PUT 的 content type 為：application/x-www-form-urlencoded。

使用 JWT 機制，登入取得Bearer Token後需加在 HTTP 請求的 Header 中。

| 說明               | Method | Path            | 需認證 | Body Content                                                |
|--------------------|--------|-----------------|--------|-------------------------------------------------------------|
| 註冊使用者         | POST   | /users/register | 否     | name, account,<br>password                                  |
| 登入獲取token      | POST   | /users/login    | 否     | account, password                                           |
| 取得所有使用者資訊 | GET    | /users          | 是     | 無                                                          |
| 取得現在使用者資訊 | GET    | /users/current  | 是     | 無                                                          |
| 取得單一使用者資訊 | GET    | /users/:id      | 是     | 無                                                          |
| 更新單一使用者     | PUT    | /users/:id      | 是     | name(optional),<br>account(optional),<br>password(optional) |
| 刪除單一使用者     | DELETE | /users/:id      | 是     | 無                                                          |
| 新增文章           | POST   | /articles       | 是     | subject, content                                            |
| 取得所有文章資訊   | GET    | /articles       | 是     | 無                                                          |
| 取得單一文章資訊   | GET    | /articles/:id   | 是     | 無                                                          |
| 更新單一文章       | PUT    | /articles/:id   | 是     | subject(optional),<br>content(optional)                     |
| 刪除單一文章       | DELETE | /articles/:id   | 是     | 無                                                          |

## Notes
Use MongoDB as database