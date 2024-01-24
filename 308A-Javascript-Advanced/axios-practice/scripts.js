
//POST - CREATE
axios.post('https://reqres.in/api/users', {
    first_name: "Colton",
    last_name: "Boss"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  //GET - RETRIEVE
axios.get('https://reqres.in/api/users?page=2')
.then(response => handleData(response.data.data))
.catch(error => console.log(error))

function handleData(data) {
    console.log(data);
}

  //PUT - UPDATE
  axios.put('https://reqres.in/api/users/222', {
    first_name: "Colton",
    last_name: "Boss",
    email: "boss_colton@coolemail.com"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  //DELETE - DELETE
  axios.delete('https://reqres.in/api/users/222')
  .then(function(response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  });