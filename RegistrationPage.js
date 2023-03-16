function validationForm(){
    var name= document.forms.name.value;
    var mail = document.forms.mailId.value;
    var user = document.forms.userName.value;
    var password = document.forms.password.value;
    var cnfpassword = document.forms.cnfpass.value;

    if(name=="" && mail=="" && user=="" && password=="" && cnfpassword==""){
        alert("Enter the required fields:")
        return false
    }

}

// function validation(){
//     var Name = document.form.firstname.value;
//     var surname = document.form.lastname.value;
//     var id = document.form.mail.value;
//     var passwrd = document.form.pass.value;
//     var conpasswrd = document.form.repass.value;
//     var num = document.form.phone.value;
    

    

//     if(Name=="" && surname==""&& id=="" && passwrd=="" && conpasswrd==""&& num=="" ){
//         alert("Fill your all details");
//         return false
//     }

//     if(Name ==""){
//         alert("Please Enter your name");
//         return false
//     }

//     if(passwrd ==""){
//         alert("Please Enter your password");
//         return false
//     }

//     if(Name=="" && passwrd!==""){
//         alert("please enter your name");
//         return false
//     }

//     if(Name!="" && passwrd==""){
//         alert("please enter your password");
//         return false
//     }
//     if(conpasswrd!=passwrd){
//         alert("Please Enter the correct password")
//         return false
//     }
//     if(Name!="" && surname!=""&& id!="" && passwrd!="" && conpasswrd!=""&& num!="" ){
//         alert("registerd Successfully");
//         window.open('index1.html');
        
//     }

// }