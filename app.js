/* Fill your code*/
function formValidate(){
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var phone = document.getElementById('phone').value;
    
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    var phoneRegex = /^[6789]{1}[0-9]{9}$/
    
    var namealert = document.getElementById('nameerror');
    var emailalert = document.getElementById('emailerror');
    var addressalert = document.getElementById('addresserror');
    var passwordalert = document.getElementById('passworderror');
    var cpasswordalert = document.getElementById('cpassworderror');
    var phonealert = document.getElementById('phoneerror');
    
    if(name.length == 0){
        document.getElementById('name').focus();
        namealert.innerHTML = 'Name should not be empty';
        return false;
    }
    else if(name.length < 8){
        document.getElementById('name').focus();
        namealert.innerHTML = 'Name should be minimum of 8 characters';
        return false;
    }
    else if(name.length > 15){
        document.getElementById('name').focus();
        namealert.innerHTML = 'Name should be maximum of 15 characters';
        return false;
    }
    else{
        namealert.innerHTML = '';
    
        if(address.length == 0){
            document.getElementById('address').focus();
            addressalert.innerHTML = 'Address should not be empty';
            return false;
        }
        else{
            addressalert.innerHTML = '';

            if(!email.match(emailRegex)){
                document.getElementById('email').focus();
                emailalert.innerHTML = 'Please enter a valid Email address';
                return false;
            }
            else{
                emailalert.innerHTML = '';

                if(password.length == 0){
                    document.getElementById('password').focus();
                    passwordalert.innerHTML = 'Password cannot be empty';
                    return false;
                }
                else if(!password.match(passRegex)){
                    document.getElementById('password').focus();
                    passwordalert.innerHTML = 'Password must contain atleat 1 Uppercase character, 1 lowercase character and 1 number and should be at least 8-15 characters long';
                    return false;
                }
                else{
                    passwordalert.innerHTML = '';

                    if(password != cpassword){
                        document.getElementById('cpassword').focus();
                        cpasswordalert.innerHTML = 'Your password and confirm password does not match';
                        return false;
                    }
                    else{
                        cpasswordalert.innerHTML = '';

                        if(!phone.match(phoneRegex)){
                            document.getElementById('phone').focus();
                            phonealert.innerHTML = 'Please enter a valid phone number';
                            return false;
                        }
                        else{
                            phonealert.innerHTML = '';
                            alert("Validation Successful");
                            location.reload();
                            return false;
                        }
                    }
                }
            }
        }
    }

}