let password = document.getElementById('pass');
let button = document.getElementById('button');

    function showpassword() {
      if (password.type === 'password') {
        password.type = 'text';
        button.textContent = 'Hide Password';
      } else {
        password.type = 'password';
        button.textContent = 'Show Password';
      }
    }