const user = {
    name : "Hamza",
    email : "hamzaoyosf@gmail.com"
};

function checkAt(){
    if (user.email.includes("@")){
        return true
    }else return false
}

let checker = checkAt(user)

module.exports = {user, checker};