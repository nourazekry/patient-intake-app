// dbConfig.js
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'Patients',
});

// Export the queryAsync function
const queryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Export the pool
module.exports = { queryAsync, pool };

