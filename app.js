const express = require('express');
const routers = require('./routers/index');
const cors = require('cors');
const CFG = require('./utils/config'); //конфиг

const allowedCors = [
      '*', //пока нет домена - будем пропускать всё
  ];
  const app = express();

  app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
 
    next();
  });
    // app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/', routers);
    app.listen(CFG.PORT, () => {
        console.log(`Application is running on port ${CFG.PORT}`) //светим в консоль, на каком порте работает приложение
    })