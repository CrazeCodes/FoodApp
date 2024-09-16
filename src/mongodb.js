const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/LoginFormPractice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Mongoose connected');
})
.catch((e) => {
    console.log('Connection failed:', e.message);
});

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection = mongoose.model('LogInCollection', logInSchema);

module.exports = LogInCollection;
