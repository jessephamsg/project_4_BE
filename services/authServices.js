const LocalStrategy = require("passport-local").Strategy;
const parentRepositories = require('../repositories/parentRepositories');
const bcrypt = require("bcrypt")


module.exports = function (passport)  {
    passport.use(
        new LocalStrategy (
        { usernameField: 'username',
         passwordField: 'password'}, /// if we want to use email as sign, change the field accordingly
        async (username, password, done) => {
        console.log(username)
        const user = await parentRepositories.getParentByUsername(username)
        if (!user) {
            return done(null, false, {message : 'No username is found'});
        }
        console.log('line 51',user.parentPassword, password)
        try {
            if (await bcrypt.compare(password, user.parentPassword)) {
                console.log('line 54', user.parentPassword)
                return done(null, user)
            } else {
                return done(null, false, {message : 'Password is incorrect'})
            }
         } catch (err) {
             console.log('something went wrong', err.message)
                return done(null,false)
        }
    })
    );

    passport.serializeUser ((user, done) => { // serialize the user to store in session
        console.log(`serialized with ${user.id}`)
        done(null, user.id)
    })
    passport.deserializeUser (async (id, done) => { // id is the serialized user
         const user = await parentRepositories.getParentByID(id)
         console.log(`deserialized with ${user.id}`)
         return done(null, user);
    })
    
}