document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if(userEmail == 'sontan@gmail.com' && password == 1234){
        window.location.href = 'banking.html';
    }
    else{
        alert('Use Valis User name and password');
    }
})
