const sqlite3=require('sqlite3');
const db = new sqlite3.Database('./test.db');
const insertStudent = (name,age,department) =>{
db.run('CREATE TABLE IF NOT EXISTS students (NAME VARCHAR(100),Age VARCHAR(100),Department VARCHAR (100))');
db.run(`INSERT INTO students(Name,Age,Department)
VALUES(?,?,?)`,[name,age,department],
function(error){
    if(error){
		return console.error('Error inserting data',error.message);
	}
	console.log("Inserted Student info");
});
};
insertStudent('Manoj',20,'AI/DS');