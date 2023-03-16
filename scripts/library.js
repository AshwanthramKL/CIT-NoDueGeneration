const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'magesh',
  database: 'nodueslibrary'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query("SELECT * FROM dues", (err, rows, fields) => {
  rows.forEach((row, index) => {
    row.paid = (parseFloat(row.due) == 0) ? 'yes' : 'no';
  });
  
  const studentDetails = JSON.stringify(rows);
  console.log(studentDetails);
});