function validation() {

    var first_name = document.getElementById('num1').value
    // varlast = document.getElementById('num2').value
    var name_error = document.getElementById('error_name')
    var email = document.getElementById("num3").value
    var number = document.getElementById("num4").value
    var password=document.getElementById("num5").value 
    var confirm =document.getElementById("num6").value
    



    if (first_name.search(/(.*[a-z]){3}/i)<0) {
        name_error.style.color = "red"
        name_error.innerHTML = "please enter first name"
        // console.log("HEllo")
        return false
    }


    if (email.search( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)<0) {
        document.getElementById("email_address").style.color = "red"
        document.getElementById("email_address").innerHTML = "please enter email addresss"
        console.log('heloooo')
        return false
    }



    if (number.search(/^\d{10}$/)<0) {
        document.getElementById("num").style.color = "red"
        document.getElementById("num").innerHTML = "please enter your number"
        // console.log("hellooooo")
        return false

    }

    if (password==''){
        document.getElementById("pass").style.color ="red"
        document.getElementById("pass").innerHTML="please enter your password"
        return false
    }
    
    if (confirm!=document.getElementById("num5").value){
        
        document.getElementById("cnfrm").style.color ="red"
        document.getElementById("cnfrm").innerHTML="should be match with password"
        return false
    }
    alert("Registration Successfull")
    console.log("Registration")
    

  
if(localStorage.getItem("users")==null){
    users=[]
    usert={
        emaill: email,
        password_1: password,   
    }

    users.push(usert)
    localStorage.setItem('users',JSON.stringify(users))
}
else{
   let userss=JSON.parse(localStorage.getItem("users"))
    usert={
        email_1: email,
        password_1: password
    }
    userss.push(usert)
    localStorage.setItem('users',JSON.stringify(userss))

    
}
// users.push(userData);
// localStorage.setItem('Users', JSON.stringify(users))

 }

