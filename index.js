// Перечисление зависимостей:
var path = require('path');
var express = require('express');

// Описание настроек:
var staticSiteOptions = {
   portnum: 80, // слушать порт 80
   maxAge: 1000 * 60 * 15 // хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
   path.join(__dirname, 'static'),
   staticSiteOptions
)).listen(staticSiteOptions.portnum);

var citys = ['Moscow', 'London', 'New-York', 'LossSantos'];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function send(currentName){
	console.log(currentName)
	var currentAge = getRandomInRange(1, 120);
	var currentCity = citys[getRandomInRange(1,4)]

	request.post({
     url: 'http://localhost:8080/post',
     body: {
       city: currentCity,
       name: currentName,
       age: currentAge,
     }
    }, (err, response, body) => {
     if(err)
       return res.status(500).send({message: err});
    
     return res.send(body);
    });
}
