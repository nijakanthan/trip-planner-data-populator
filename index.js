// const mysql = require('mysql');

// const mysqlConnection = mysql.createConnection({
//   host: 'mysql-307be543-38df-4da4-8d34-1078c3836480-trippla1675333630-ch.a.aivencloud.com',
//   port: '11556',
//   user: 'avnadmin',
//   database: 'trip-planner',
//   password: 'AVNS_EZPmfr9k2sMyOWJrk6V',
//   multipleStatements: true,
// });

// mysqlConnection.connect((err) => {
//   if (!err) {
//     console.log('Connected');
//   } else {
//     console.log('Connection Failed', err);
//   }
// });

console.log('Running trip planner data populator');
const args = process.argv.slice(2);
switch (args[0]) {
  case 'insert':
    if (args[1] && args[2]) {
      console.log(`Inserting data to ${args[1]}: Table -> ${args[2]},`)
    } else {
      console.log('Need more arguments for "insert" command (Ex: insert <db_name> <table_name>)')
    }
    break
  case 'reset':
    if (args[1]) {
      console.log(`Resetting database ${args[1]}`)
    } else {
      console.log('Need more arguments for "reset" comment (Ex: reset <db_name>)')
    }
    break
  default:
    console.log('Invalid arguments')
}
