console.log(localStorage.getItem('userInfo'));

const dataPerson = JSON.parse(localStorage.getItem('userInfo'));
const fullName = document.querySelector('h2');
const email = document.querySelector('p');


fullName.innerHTML = dataPerson.firstName + " " + data.lastName;
email.innerHTML = dataPerson.email; 

