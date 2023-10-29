function displayUserDetails(){
    let username = prompt ("Enter your username")

    while(validateUsername(username)== false)
        username = prompt ("Username not Valid. Please enter a valid username")
    
    let password = prompt ("Enter your password")
    
    while(validatePassword(password)== false)
        password = prompt ("password not Valid. Please enter a valid password")

        console.log (username,password)
}

displayUserDetails()
alert ("you have come to the end.Goodbye!")

function validateUsername (username) {
    if (username == null) {
        return true
    }
    if (username.length > 10){
        return false
    }else {
        return true
    }

    }

function validatePassword (password) {
    if (password == null) {
        return true
    }
    if (password.length < 6){
        return false
    } else {
        return true
    }

}




// assignment
// create a webpage that validates a user and returns users details
// accept details using prompt
// use object to store user details
// validate user details 
//   password must be less than 10
//   password must be greater than 6
//   user must confirm password
//   if username and password does not match, alert user
// display user details  