var password = require("password-hash-and-salt");


function pw() {

    var myuser = [];
    password('mysecret').hash(function (err, hash) {
        if (err)
            throw new Error('Error in password.hash: ' + err);

        myuser.hash = hash;

        password('hack').verifyAgainst(myuser.hash, function (err, verify) {
            if (err)
                throw new Error('Error in password.verifyAgainst: ' + err);
            if (!verify) {
                console.log("HELP!  Thief!");
            } else {
                console.log("It worked");
            }
        });
    });
}

module.exports = pw;