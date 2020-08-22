const passport = require("passport")

module.exports = {
    login (req,res,next) {
        console.log('req.body' ,req.body)
        passport.authenticate("local", 
            (err, user, info) => {
            if(err) throw err;
            if(!user) res.status(400).send("no user exists", info.messages);
            else {
                req.login(user, (err) => {
                    if(err) throw err;
                    const {_id, parentName} = req.user
                    // res.status(201).send(`Successfully AAAAuthenticated with` + req.session.passport.user)
                    res.status(200).send({isAuthenticated : true, currentUser:{_id,parentName}})
                })
            }
        })(req,res,next);
    }
}