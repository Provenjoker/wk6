function checkCreds(){
    console.log("checkCreds() started...");
    //create the name and badge variables and fill them in.
    var firstName = document.getElementById("fName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name: " + lastName);
    var badgeNumb = parseInt(document.getElementById("badgeID").value);
    console.log("Badge Number: " + badgeNumb);

    //make a fullName variable.
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);

    //checks if the name goes over the 20 character limit.
    var fullNameLength = fullName.length;
    console.log(fullNameLength);
    if(fullNameLength > 21 || fullNameLength < 3){
        document.getElementById("loginStatus").innerHTML =
             "Invalid Full Name, please resubmit.";
    } else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Badge Number, please resubmit.";
    }
    else {
        //if everything checks out it will move you to the page 
        alert("Access Granted, Welcome " + fullName);
        location.replace("index.htm");
    }

    //check the badge number is less than 1000
    

    

}