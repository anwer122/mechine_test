
function check(){
    user_name=document.getElementById('num3').value
    pass=document.getElementById('num5').value
    users=JSON.parse(localStorage.getItem("users"));
    for(i=0;i<100;i++){
        console.log(users[i])
        if(user_name==users[i].email_1 && pass==users[i].password_1){
            alert("you are Logged-IN")
            window.location.replace("home.html")
            break;
        }
        else{
            document.getElementById("error").style.color="red"
            document.getElementById("error").innerHTML="Entered Email or passwoed is Incorrect"
            console.log("not")
        }

    }
  
  
    
  
}