const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./test.db');
db.run('INSERT INTO workshop(Name), VALUES(?)',
    ['SINCET-AIDS'],
    function(error){
        console.log("Inserted !");
    }
);
