# api.rmj.io

The API for [rmj.io](http://rmj.io).

## Install

This project is meant to be run with Node.js v5, so make sure you have it installed and active when running this application.

```
$ nvm install 5
$ nvm use 5
$ npm i
```

If you have [avn](https://github.com/wbyoung/avn) setup, the `.node-version` file should automatically switch the version for you.

### Database

```
$ psql postgres
postgres=# CREATE ROLE "rmj_user" CREATEDB CREATEUSER LOGIN;
$ createdb -O rmj_user rmj
```
