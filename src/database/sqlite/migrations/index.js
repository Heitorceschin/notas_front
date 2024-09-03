const sqliteConnection = require('../../sqlite');

const creatUsers = require('./creatusers');

async function migrationsRun() {
    const schemas = [
        creatUsers
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error)); 
}

module.exports = migrationsRun;