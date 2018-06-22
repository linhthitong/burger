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
  


  var mysql = require('mysql');
  var connection;
  var JAWSDB_URL = "mysql://jf991b3lcfbg3rhk:n81wcpta9d9ea9k2@q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u5iqs6d708wn6pwl";
  
  
  
  if ( process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
          host: "localhost",
          port: 3306,
          user: "root",
          password: "",
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