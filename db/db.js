const mongoose = require('mongoose');
const MONGO_SERVER = process.env.MONGO_SERVER || 'mongodb+srv://proj4:1odHcEMJjz7JVOPc@project4.ksmb1.gcp.mongodb.net/test';

module.exports = {
    async connect() {
        try {
            await mongoose.connect(
                `${MONGO_SERVER}`, {
                    useNewUrlParser: true
                }
            )
            console.log(`Connecting to Project4 db on ${MONGO_SERVER}`);
        } catch {
            console.log(`Error connecting to Project4 db: ${err}`);
        }
    },
    disconnect() {
        return mongoose.connection.close(() => {
            console.log('Database connection to Project4 closed');
        })
    }
}