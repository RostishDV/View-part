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

function getName(){
      var name = document.getElementById('name');
      return name;
    }

function myScript()
    {
      alert('LossSantos')
    }