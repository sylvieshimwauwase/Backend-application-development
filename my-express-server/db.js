const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',      // Your database host
  user: 'root',           // Your MySQL username
  password: '',           // Your MySQL password
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Define your database creation query
  const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS my_database';

  // Execute the query
  connection.query(createDatabaseQuery, (err) => {
    if (err) {
      console.error('Error creating database:', err);
    } else {
      console.log('Database created successfully');
    }

    // Close the connection
    connection.end();
  });
});