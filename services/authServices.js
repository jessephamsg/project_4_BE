const LocalStrategy = require("passport-local").Strategy;
const parentRepositories = require('../repositories/parentRepositories');
const bcrypt = require("bcrypt")


module.exports = function (passport)  {
    passport.use(
        new LocalStrategy ({ usernameField: 'username', passwordField: 'password'}, /// if we want to use email as sign, change the field accordingly
        async (username, password, done) => {
        const user = await parentRepositories.getByName(username)
        if (!user) {
            return done(null, false, {message : 'No username is found'});
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message : 'Password is incorrect'})
            }
         } catch (err) {
                return done(null,false, {message: err.message})
        }
    })
    );

    passport.serializeUser ((user, done) => { // serialize the user to store in session
        console.log(`serialized with ${user.id}`)
        done(null, user.id)
    })
    passport.deserializeUser (async (id, done) => { // id is the serialized user
         const user = await parentRepositories.getByID(id)
         console.log(`deserialized with ${user.id}`)
         return done(null, user);
    })
    
}