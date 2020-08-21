const passport = require("passport")

module.exports = {
    login (req,res,next) {
        console.log('req.body' ,req.body)
        passport.authenticate("local", 
            (err, user, info) => {
            console.log('line 15', user)
            if(err) throw err;
            if(!user) res.status(400).send("no user exists", info.messages);
            else {
                req.login(user, (err) => {
                    console.log('login success with ', user.parentName)
                    if(err) throw err;
                    res.status(201).send(`Successfully AAAAuthenticated with ${req.session.passport.user}`)
                })
            }
        })(req,res,next);
    }
}