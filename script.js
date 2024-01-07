
console.log('hello world')


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzStPDNQ-TIG593cQ6BwK2nrXtCQMteeunG--go9cuKL8vh6sWULKS9Nvx5qdl8NA2kHw/exec'
  const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');
success.style.color='white';
success.style.fontSize='20px';
success.style.fontWeight = '600';
success.style.textAlign='center';
success.style.transitionDuration='2s';
success.style.transitionDelay='2s';



  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.innerHTML="success your data";

        setTimeout(function(){
            success.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

//   ------------ forget password -------
var nae = document.getElementById('same');
let pasord = document.getElementById('pas');
const forgetpassword = document.getElementById('forgetp');


forgetpassword.addEventListener('click', function(){
    forgetpassword.style.color='red';
    nae.style.display='none';
    pasord.style.display='none';
   document.getElementById('na').style.display='none'
   document.getElementById('pa').style.display='none'
   
 
})
// forgetpassword.style.display = ' none'

//  password generator
function generatePassword(length = 12) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
  let password = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
  }

  document.getElementById('password').innerText = 'Password: ' + password;
}

// email generator

function generateEmail() {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com', 'yourdomain.com'];
  const username = generateRandomString(8);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const email = username + '@' + domain;

  document.getElementById('email').innerText = '' + email;
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
  }

  return randomString;
}






