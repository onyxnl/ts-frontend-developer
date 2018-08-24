function formValidation() {

    var addr = document.getElementById('input-address');
    var amount = document.getElementById('input-amount');
    var otp = document.getElementById('input-otp');
    var sendbtn = document.getElementById('sendbtn'); 

    if (textAlphanumeric(addr, "* For Address please use numbers and letters *")) {
    if (textNumeric1(amount, "* Please enter numbers only *")) {
    if (textNumeric(otp, "* Please enter numbers only *")) {
    if (formSubmit()) {

        return true;
    }
    }
    }
    }
        return false;
}

// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) {
    
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        document.getElementById('p1').innerText = "";
        return true;
    } else {
        document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for address.
        inputtext.focus();
        return false;
    }
}

// Function that checks whether input text is numeric or not.
function textNumeric1(inputtext, alertMsg) {
    var numericExpression = /^-?\d*(\.\d+)?$/;
    if (inputtext.value.match(numericExpression)) {
        document.getElementById('p2').innerText = "";
        return true;
    } else {
        document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for zip.
        inputtext.focus();
        return false;
    }
}

// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) {
    var numericExpression = /^[0-9]+$/;
    if (inputtext.value.match(numericExpression)) {
        document.getElementById('p3').innerText = "";
        return true;
    } else {
        document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for zip.
        inputtext.focus();
        return false;
    }
}

// Function Form Successfully.
function formSubmit() {
    
    var addrval = document.getElementById('input-address').value;
    var amountval = document.getElementById('input-amount').value;
    var otpval = document.getElementById('input-otp').value;
    if (addrval != null && amountval != null && otpval != null) {
        document.getElementById('successalert').style.display = "block";
        setTimeout(function(){
            document.getElementById('successalert').style.display = "none";
        },3000);
    return false;
    }
}