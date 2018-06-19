// //set up MySQL connection
// require("dotenv").config();

// var password = require("./password.js");
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.PASSWORD_,
//     database: "burgers_db"
//   });

// // Make connection.
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
  
//   // Export connection for our ORM to use.
//  
  


  var msql = require('mysql');
  var connection;
  var JAWSDB_URL = "mysql://ej350ibsoo03vkhl:ry9wr80nfiiayugr@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/a0crr8bjgz5ihkno";
  
  
  
  if ( process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
          host: "localhost",
          port: 3306,
          user: "root",
          password: "process.env.PASSWORD",
          database: "burgers_db"
        });
  }

  module.exports = connection;
// var connection;
// // if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({

//         host: "localhost",
//         port: 3306, 
//         user: "root",
//         password: process.env.PASSWORD_,
//         database:"burgers_db"
//     });

// };

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
  
//   module.exports = connection;