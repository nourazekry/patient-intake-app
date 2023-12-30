const { pool } = require('../../db/dbConfig');

exports.getHeartFailurePatientById = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      const query = 
      `SELECT *
      FROM Patients.HeartFailurePatients p
      INNER JOIN Patients.HeartFailurePatientDataText pdt 
      ON p.id = pdt.patient_id
      INNER JOIN Patients.HeartFailurePatientDataNum pdt 
      ON p.id = pdt.patient_id
      INNER JOIN Patients.HeartFailurePatientDataDate pdt 
      ON p.id = pdt.patient_id
      WHERE p.id = ?`;
      pool.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };