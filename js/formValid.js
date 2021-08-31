function validateForm (event) {
    var p1 = document.getElementById('psw');
    var p2 = document.getElementById('psw-repeat');
    if (p1.value !== p2.value) {
    alert('Repeat your password');
    return false;
    }
    
    var login = document.getElementById('login');
    
    if (localStorage.getItem(login.value)) {
    alert('This Login is already exist');

    
    }else{
        localStorage.setItem(login.value,p1.value);
        alert('You are successfully registered. Login to shop)');
        document.getElementById('id01').style.display='none';
        document.getElementById("login").value = "";
        document.getElementById("psw").value = "";
        document.getElementById("psw-repeat").value = "";
    }
}
let btn = document.getElementById('cancel');
btn.onclick = function(){
    document.getElementById('id01').style.display='none';
        document.getElementById("login").value = "";
        document.getElementById("psw").value = "";
        document.getElementById("psw-repeat").value = "";
};
function validateFormOfSignIn(){
    var login = document.getElementById('login1');
   if (!localStorage.getItem(login.value)) {
        alert('This Login is not exist');
        document.getElementById('id02').reset();
       
   }
   let passwd = document.getElementById('psw1')
   let cat = localStorage.getItem(login.value);
   if(passwd.value == cat){
    window.open ('fstore.html','_self',false);
   }
   
}
let btnIn = document.getElementById('back');
btnIn.onclick = function(){
   document.getElementById('id02').style.display='none';
       document.getElementById("login1").value = "";
       document.getElementById("psw1").value = "";
};