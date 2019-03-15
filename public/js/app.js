console.log('Client side javascript file is loaded!')



const form = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('msg1');
const message2 = document.getElementById('msg2');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  message1.textContent = 'Loading...';
  message2.textContent = '';

  const location = search.value;
  fetch('/weather?address='+ location).then(response => {
  response.json().then(data => {
    //console.log(data);
    if (data.error) {
      message1.textContent = data.error;
    } else {
      message1.textContent = data.location;
      message2.textContent = data.forecast;
    }
    
  })
})
})
