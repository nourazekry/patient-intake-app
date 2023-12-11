const db = require('../../db/dbConfig');

exports.getHeartFailurePatientById = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      const query = 
      `SELECT *
      FROM Patients.HeartFailureGeneral g 
      INNER JOIN Patients.HeartFailurePatientData pd 
      ON pd.id = g.patient_data_id
      WHERE g.id = ?`;
      db.query(query, [id], (error, results) => {
        console.log(results);
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };