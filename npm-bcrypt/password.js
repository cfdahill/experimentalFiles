var bcrypt = require('bcrypt');
var saltRounds = 10
//saltRounds will determine how many digits the salt is
//var createPW;
//this will be the correct password
//var testPW;
//this will be the person logging on, either correct password or wrong
var hashSaltPW = "$2b$10$o6KeGbX8/SUzwqFmSOs2LOS1MQiDBH6IUEnfyLrCLfGhV0APRsXpG"
//since I am currently not putting the password in a database, this will let me use the correct password globally, this is "password"

//below will create the hash and salt passsword, to be done when creating an account
//the cb is only for testing purposes to check that the checkPW is working based on the hash from the makePW.  Normally this hash would be sent to the database by makePW and then called by checkPW
var pw = {
    makePW: function (createPW, cb) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                console.error("Error in bcrypt.genSalt: " + err);
            }
            bcrypt.hash(createPW, salt, function (err, hash) {
                //store hashed password to database
                //let person continue with creating account
                if (err) {
                    console.error("Error in bcrypt.hash: " + err);
                }
                console.log("the hashed password is: " + hash);
                cb(hash);
            });
        });
    },
//below will compare the login password (testPW) to the hashed password in the database(hash)
    checkPW: function (testPW, hash) {
        bcrypt.compare(testPW, hash).then(function (res) {
            console.log("User input: " + testPW + ".  The hash on record is: " + hash);
            console.log("Are the 2 passwords the same?  " + res);
            //true is a correct PW
            
        });
    }
}


//the line below will create a hash password and then check that the user input matches that hash
pw.makePW("Password", function(hash){
    pw.checkPW("Passw", hash)
});


module.exports = pw;

//look at https://www.npmjs.com/package/bcrypt for when I am ready to get username and password, there are some lines on making that function.