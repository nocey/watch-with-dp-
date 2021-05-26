const checkAuth = require("../../util/check-auth");

module.exports = {
    Query : {
        async getUser(_ ,a, context){
            console.log(a)
            console.log(context)
            const user = checkAuth(context)
            console.log(user);
            return user;
        }
    }
}