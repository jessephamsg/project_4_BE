const mongoose = require('mongoose');
// const MONGO_SERVER = process.env.MONGO_SERVER || 'mongodb+srv://proj4:1odHcEMJjz7JVOPc@project4.ksmb1.gcp.mongodb.net/proj4?retryWrites=true&w=majority';
const MONGO_SERVER = 'mongodb+srv://proj4:1odHcEMJjz7JVOPc@project4.ksmb1.gcp.mongodb.net/proj4?retryWrites=true&w=majority'
// const MONGO_SERVER = 'mongodb://localhost:27017/project4?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
// put mongo server in .env after finishing development

module.exports = {

    async connect() {
        try {
            await mongoose.connect(
                `${MONGO_SERVER}`, {
                    useNewUrlParser: true
                }
            )
            console.log(`Connecting to Project4 db on ${MONGO_SERVER}`);
        } catch (err) {
            console.log(`Error connecting to Project4 db: ${err}`);
        }
    },

    disconnect() {
        return mongoose.connection.close(() => {
            console.log('Database connection to Project4 closed');
        })
    }

}