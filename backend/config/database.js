const mongoose = require('mongoose');

const dbURI = 'mongodb://<username>:<password>@<host>:<port>/<dbname>';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected…');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;