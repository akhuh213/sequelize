const usersDB = require('./models');
const db = require('./models');

db.user.create({
    firstName: 'Brian',
    lastName: 'Bell',
    age: 32,
    email:'alice@gmail.com'
});