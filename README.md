# api.rmj.io

The API for [rmj.io](http://rmj.io).

[![Build Status](https://travis-ci.org/robinjoseph08/api.rmj.io.svg)](https://travis-ci.org/robinjoseph08/api.rmj.io)
[![Coverage Status](https://coveralls.io/repos/robinjoseph08/api.rmj.io/badge.svg?branch=master&service=github)](https://coveralls.io/github/robinjoseph08/api.rmj.io?branch=master)
[![Dependency Status](https://david-dm.org/robinjoseph08/api.rmj.io.svg)](https://david-dm.org/robinjoseph08/api.rmj.io)

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
