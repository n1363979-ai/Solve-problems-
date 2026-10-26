const SignupSection = document.getElementById("signup")
const SigninSection = document.getElementById("signin")

const SigninButton = document.getElementById("signin-button");
const SignupButton = document.getElementById("signup-button");

    SigninButton.onclick = function(){

    SignupSection.style.display = "none";
    SigninSection.style.display = "flex";
    SignupButton.style.width="30%";
}

    SignupButton.onclick = function(){
    SigninSection.style.display = "none";
    SignupSection.style.display = "flex";
    
}



// const password = document.getElementById("signupPassowrd")
// const passwordShow= document.getElementsByClassName(".passwordShow")

// passwordShow.onclick = function(){
//     password.style.backgroundColor=("red")
// }


   
