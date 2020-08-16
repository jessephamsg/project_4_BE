const LocalStrategy = require("passport-local").Strategy;
const parentRepositories = require('../repositories/parentRepositories');
const bcrypt = require("bcryptjs")


async function initialize(passport)  {
    const authenticateUser = (username, password, done) => {
        const parent = await parentRepositories.getByUsername(username)
        if (!parent) {
            return done(null, false, {message : 'No username is found'});
        }
        console.log(parent)
        try {
            if (await bcrypt.compare(password, parent.password)) {
                return done(null, parent)
            } else {
                return done(null, false, {message : 'Password is incorrect'})
            }
         } catch (err) {
                return done(null,false)
        }
    }

    passport.use(new LocalStrategy ({usernameField:' username'},
    authenticateUser))

    passport.serializeUser ((user,done) => { // serialize the user to store in session
        
    })
    passport.deserializeUser ((id, done) => { // id is the serialized user

    })
    
}

module.exports = initialize 