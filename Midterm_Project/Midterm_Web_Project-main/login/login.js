function logIn(e){
    const username=document.getElementById("userN").value;
    const password=document.getElementById("pass").value;

    e.preventDefault();
   
    if(username==="s-twins@admin" && password==="password")
        window.location.assign("../adminDisplay/adminDisplay.html")
    else
    alert("Username or Password Incorrect")
   
}