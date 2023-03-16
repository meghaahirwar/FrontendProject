function validateForm(){
    var user = document.form.username.value;
    var password = document.form.password.value;

    if(user=="" && password==""){
        alert("Please Enter Your Details");
    }
    if(user=="Astoria" && password=="Astoria@123"){
        alert("Login successfully");
        setTimeout(function(){
            window.location="MainPage.html";
        },5);
    }else if(password =="" && user != ""){
        alert("Please fill the password")

    }else if(password !="" && user == ""){
        alert("Please fill username")

    }
    else if(password != "Astori@123" && user == ""){
        alert("Please fill username")
    }
    else{
        alert("Username or Password is not correct")
    }
}