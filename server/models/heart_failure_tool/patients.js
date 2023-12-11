const db = require('../../db/dbConfig');

exports.getHeartFailurePatients = () => {
    return new Promise((resolve, reject) => {
      const query = 
             `SELECT g.id, 
                full_name, 
                sex, 
                entry_date
            FROM Patients.HeartFailureGeneral g 
            INNER JOIN Patients.HeartFailurePatientData pd 
            ON pd.id = g.patient_data_id;`;
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };